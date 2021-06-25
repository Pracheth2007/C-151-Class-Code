AFRAME.registerComponent('log',{
    schema: {
        message:{type:'string', default:'Hell World'}
    },
    init:function(){
        console.log(this.data.message)
    }
})