$ ($) ->
  allBox = $('#J_All')
  listBox = $('.list input[type=checkbox]')
  allBox.delegate this,'change', ->
    if $(@).prop('checked')
      listBox.attr('checked', true)
      return
    else
      listBox.attr('checked', false)
      return
  listBoxCheck = ->
    for i in listBox
      if !i.prop('checked')
        return false
  return


