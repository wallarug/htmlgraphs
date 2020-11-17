#!/usr/bin/python

# Tornado app file

import tornado.ioloop
import tornado.web
import tornado.template
import os.path

import config


class NetworkHandler(tornado.web.RequestHandler):

    def get(self):
        self.render("network.html", data=data)



class MainHandler(tornado.web.RequestHandler):
    def get(self):
        self.render("index.html")

    
# Set up the tornado application object
class Application(tornado.web.Application):
    def __init__(self):
        handlers = [
            (r"/", MainHandler),
            (r"/network", NetworkHandler)
            #(r"/static/(.*)", tornado.web.StaticFileHandler, {'path': config.static_path}),
            # Add more paths here  tornado.web.StaticFileHandler, {'path': 'static/question1.html'}
        ]
        settings = {
            "template_path": config.TEMPLATE_PATH,
            "static_path": config.STATIC_PATH,
            "debug": True
        }
        tornado.web.Application.__init__(self, handlers, **settings)
        
if __name__ == "__main__":
    app = Application()
    app.listen(config.port)
    print("Starting tornado server on port %d" % (config.port))
    print(config.base_dir, config.STATIC_PATH, config.TEMPLATE_PATH)
    tornado.ioloop.IOLoop.instance().start()
