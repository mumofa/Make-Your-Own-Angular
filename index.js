/**
 * Created by Administrator on 2017/3/14.
 */
function Scope() {
    this.$$watchers = [];
}

Scope.prototype.$watch = function(watchFn,listenFn) {
    var watcher = {
        watchFn : watchFn,
        listenFn : listenFn
    };
    this.$$watchers.push(watcher);
};
Scope.prototype.$digest = function() {
    this.$$watchers.forEach(function(watcher) {
        watcher.listenFn();
    })
};