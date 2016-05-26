'use strict';

var expect = require('chai').expect;
var AdminList = require('./index.admin-list.js');

describe('AdminList', function() {

  var assertSuperadminFound = function(superadminToFind) {
    var foundSuperadmin = new AdminList([superadminToFind]).getFirstSuperadministrator();
    expect(foundSuperadmin).to.eql(superadminToFind);
  };


  describe('#getFirstSuperadministrator', function() {
    it('should find superadministrator by string superadmin flag', function() {
      assertSuperadminFound({ id: 1, superadmin: '1' });
    });


    it('should find superadministrator by int superadmin flag', function() {
      assertSuperadminFound({ id: 1, superadmin: 1 });
    });
  });


  describe('#getSuperadministrators', function() {
    it('should return all the superadministrators', function() {
      var administrators = [
        { id: 1, superadmin: 0 },
        { id: 2, superadmin: 1 },
        { id: 3, superadmin: '1' }
      ];

      var foundSuperadmins = new AdminList(administrators).getSuperadministrators();
      expect(foundSuperadmins).to.eql([
        { id: 2, superadmin: 1 },
        { id: 3, superadmin: '1' }
      ]);
    });
  });

});
