import logging
import tornado.escape
import tornado.ioloop
import tornado.options
import tornado.web
import tornado.websocket
import os.path
import uuid
import redis

from tornado.options import define, options

redis_pool = redis.ConnectionPool(host='127.0.0.1', port=6379)
define("port", default=8080, help="run on the given port", type=int)


class Application(tornado.web.Application):
    def __init__(self):
        handlers = [
            ("/", MainHandler),
            ("/room/\d*", HallHandler)
        ]
        settings = dict(
            # debug=True,
            xsrf_cookies=True,
            cookie_secret="toad",
            template_path=os.path.join(os.path.dirname(__file__), "templates"),
            static_path=os.path.join(os.path.dirname(__file__), "static"),
            static_url_prefix="/static/",
        )
        tornado.web.Application.__init__(self, handlers, **settings)


# 首页渲染路由
class MainHandler(tornado.web.RequestHandler):
    def get(self):
        self.render("index.html", title="2333")


# 大厅输入ID后相关处理(包括把不同ID的玩家放在同一房间内)
class HallHandler(tornado.websocket.WebSocketHandler):
    pool = {}

    def open(self, *args, **kwargs):
        room_id = self.request.path[6:]
        clients = HallHandler.pool.get(room_id, set())
        clients.add(self)
        HallHandler.pool[room_id] = clients  # TODO optimize
        print("ws open: " + room_id)

    def on_message(self, message):
        print(message)
        room_id = self.request.path[6:]
        HallHandler.update(room_id, message)

    def on_close(self):
        room_id = self.request.path[6:]
        HallHandler.pool[room_id].remove(self)
        print("closed")

    @classmethod
    def update(cls, room_id, msg):
        for chat in cls.pool[room_id]:
            chat.write_message(msg)

    def check_origin(self, origin):
        return True


def main():
    tornado.options.parse_command_line()
    app = Application()
    app.listen(options.port)
    tornado.ioloop.IOLoop.instance().start()


if __name__ == "__main__":
    main()
