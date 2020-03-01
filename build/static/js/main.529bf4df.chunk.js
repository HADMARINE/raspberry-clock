(this['webpackJsonpreact-typescript-boilerplate'] =
  this['webpackJsonpreact-typescript-boilerplate'] || []).push([
  [0],
  {
    35: function(n, t, e) {
      n.exports = e(50);
    },
    40: function(n, t, e) {},
    50: function(n, t, e) {
      'use strict';
      e.r(t);
      var a = e(0),
        i = e.n(a),
        r = e(20),
        o = e.n(r),
        c = (e(40), e(27)),
        l = e(5),
        s = e(21),
        u = e(22),
        h = e(31),
        p = e(23),
        m = e(32),
        f = e(9),
        d = e(10),
        v = e(13),
        g = e.n(v),
        b = e(52);
      e(42);
      function w() {
        var n = Object(f.a)([
          '\n  position: absolute;\n  bottom: 30px;\n  display: flex;\n  justify-content: center;\n  width: 100vw;\n',
        ]);
        return (
          (w = function() {
            return n;
          }),
          n
        );
      }
      function y() {
        var n = Object(f.a)([
          '\n  width: 100vw;\n  height: 100vh;\n  background-color: black;\n  color: black;\n',
        ]);
        return (
          (y = function() {
            return n;
          }),
          n
        );
      }
      function x() {
        var n = Object(f.a)([
          '\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100vw;\n  height: 100vh;\n  color: white;\n  font-size: 200px;\n  font-weight: 100;\n  @media screen and (max-width: 1200px) {\n    font-size: 150px;\n  }\n  @media screen and (max-width: 800px) {\n    font-size: 100px;\n  }\n',
        ]);
        return (
          (x = function() {
            return n;
          }),
          n
        );
      }
      var E = d.a.div(x()),
        j = d.a.div(y()),
        k = d.a.span(w()),
        O = (function(n) {
          function t() {
            var n, e;
            Object(s.a)(this, t);
            for (var a = arguments.length, i = new Array(a), r = 0; r < a; r++)
              i[r] = arguments[r];
            return (
              ((e = Object(h.a)(
                this,
                (n = Object(p.a)(t)).call.apply(n, [this].concat(i)),
              )).state = { time: g()().format('LTS'), isDisplaying: !0 }),
              (e.handleToggleVisible = function() {
                e.setState({ isDisplaying: !e.state.isDisplaying });
              }),
              e
            );
          }
          return (
            Object(m.a)(t, n),
            Object(u.a)(t, [
              {
                key: 'componentDidMount',
                value: function() {
                  var n = this;
                  setInterval(function() {
                    n.setState({ time: g()().format('LTS') });
                  }, 100);
                },
              },
              {
                key: 'render',
                value: function() {
                  var n = this.state.isDisplaying
                    ? i.a.createElement(E, null, this.state.time)
                    : i.a.createElement(j, null);
                  return i.a.createElement(
                    i.a.Fragment,
                    null,
                    n,
                    i.a.createElement(
                      k,
                      null,
                      i.a.createElement(
                        b.a,
                        {
                          variant: 'secondary',
                          onClick: this.handleToggleVisible,
                          size: 'lg',
                        },
                        this.state.isDisplaying ? 'OFF' : 'ON',
                      ),
                    ),
                  );
                },
              },
            ]),
            t
          );
        })(a.Component),
        D = i.a.createElement(
          i.a.Fragment,
          null,
          i.a.createElement(
            c.a,
            null,
            i.a.createElement(
              l.c,
              null,
              i.a.createElement(l.a, { exact: !0, path: '/', component: O }),
            ),
          ),
        ),
        z = function() {
          return D;
        },
        F = e(30),
        S = e.n(F);
      Boolean(
        'localhost' === window.location.hostname ||
          '[::1]' === window.location.hostname ||
          window.location.hostname.match(
            /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/,
          ),
      );
      S.a.config(),
        o.a.render(i.a.createElement(z, null), document.getElementById('root')),
        'serviceWorker' in navigator &&
          navigator.serviceWorker.ready.then(function(n) {
            n.unregister();
          });
    },
  },
  [[35, 1, 2]],
]);
//# sourceMappingURL=main.529bf4df.chunk.js.map
