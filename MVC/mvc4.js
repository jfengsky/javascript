const selectData = [{
    value: 1,
    title: 'one'
},{
    value: 2,
    title: 'two'
},{
    value: 3,
    title: 'three'
}]

const Model = function(data){
    this.data = data
}


const View = function(model){
    this.model = model
    this.model.
}

const Collection = function(model, view) {
    this.view = view
    this.view.render()
}

Model.prototype = {
    selected(value){
        debugger
    }
}

View.prototype = {
    render(){
        let tpl = ''
        this.model.data.map( item => {
            tpl += `<li>
                        <label>
                            <input type="radio" name="test" value="${item.value}">${item.title}
                        </label>
                   </li>`
        })
        $('#app').html(tpl)
    }
}

Collection.prototype = {
    // selectItem(){
    //     this.model
    // }
}

const mod1 = new Model(selectData)

const view1 = new View(mod1)

new Collection(mod1, view1)
