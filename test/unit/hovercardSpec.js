/* globals angular, beforeEach, chai, describe, inject, it */
'use strict';

var expect = chai.expect;

describe('hovercard', function() {
  var elm, scope;

  // load the code
  beforeEach(module('yaru22.hovercard'));

  // load the templates
  beforeEach(module('tmpl'));

  beforeEach(inject(function($rootScope, $compile) {
    // we might move this tpl into an html file as well...
    elm = angular.element(
      '<hovercard hover-tmpl-url="\'hoverCardDetail.tmpl\'">' +
        'Brian Park' +
      '</hovercard>'
    );

    scope = $rootScope;
    $compile(elm)(scope);
    scope.$digest();
  }));


  it('should create a label', inject(function() {
    var label = elm.find('.angular-hovercard-label');

    expect(label).to.have.length(1);
    expect(label.eq(0).text().trim()).to.equal('Brian Park');
  }));

  it('should load template specified on hover-tmpl-url', inject(function() {
    var detail = elm.find('.angular-hovercard-detail');

    expect(detail).to.have.length(1);
    expect(detail.eq(0).text().trim()).to.equal('Hover card detail.');
  }));
});
