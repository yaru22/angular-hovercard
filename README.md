angular-hovercard [![Analytics](https://ga-beacon.appspot.com/UA-2694988-7/angular-hovercard/readme?pixel)](https://github.com/yaru22/angular-hovercard)
=================
Hovercard is a very lightweight Angular directive that is written purely in AngularJS. It is a card that is displayed when you hover over a label. The card can contain any html element.


Demo
----
Check out the demo [here](http://www.brianpark.ca/projects/angular_hovercard/demo/).


How to Use
----------
Include `angular-hovercard.(js|css)` in your project (you can do so via `bower install angular-hovercard`).

Load the directive after loading `angular.js`

```
<script src="<path to angular.js>"></script>
<script src="<path to angular-hovercard.js>"></script>
```

Specify angular-hovercard as a dependency of your Angular module.

```
var app = angular.module('ngApp', [
  'yaru22.hovercard'
]);
```

Use it in your project.

```
<html ng-app="ngApp">
...
<body>
  <hovercard hover-tmpl-url="hoverCardDetail.tmpl">Hover over here</hovercard>.
  ...
</body>
</html>
```

or check out my [Plunker](http://plnkr.co/edit/s6BVMpqTPdeHo7zE4nWU?p=preview) for the minimal setup.


How to Contribute
-----------------
```
$ git clone https://github.com/yaru22/angular-hovercard.git
$ cd angular-hovercard
$ npm install; bower install
$ # modify the source code in src/
$ grunt clean; grunt build
$ # test your changes; you can modify demo/ and serve it locally to see the changes.
$ # submit a pull request
```
