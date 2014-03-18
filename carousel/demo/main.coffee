define (require) ->
  $ = require('jquery')
  carousel = require('../src/carousel')

  carousel1 = new carousel('#carousel1',{
    }).init();
  return