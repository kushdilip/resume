import data from 'resume/utils/data';
import { module, test } from 'qunit';

module('Unit | Utility | data', function() {

  // Replace this with your real tests.
  test('it works', function(assert) {
    assert.ok(data);
    assert.ok(data.header);
    assert.ok(data.side_header);
    assert.ok(data.side_content.length, 4);
    assert.equal(data.experience.items.length, 4);
  });
});
