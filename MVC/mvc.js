/**
 *
 * Created 16/9/9.
 */

const Model = function(elems) {
    this._elems = elems
}

Model.prototype = {
    constructor: 'Model'
}

const View = function(model, evelems){
    this._model = model
    this._evelems = evelems

}

View.prototype = {
    constructor: 'View',
    initialize(){
        this.render()
    },
    render(){

    }
}

const Controller = function(model, view){
    this._model = model
    this._view = view
}

$(function(){
    let list = [{
        name: 'one',
        value: 1,
    },{
        name: 'two',
        value: 2
    },{
        name: 'three',
        value: 3
    }]

    const mode = new Model(list)
    const view = new View(mode, {
        list: '#list'
    })

    const controller = new Controller(mode, view)
})