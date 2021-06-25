AFRAME.registerComponent(
    "move-box",{
        schema:{
            moveX:{type:"number",default:1},
        },
        tick:function(){
            this.data.moveX = this.dataset.moveX+X+0.01
            var pos = this.el.getAttribute("position")
            pos.x = this.data.moveX
            this.el.setAttribute("position",{
                x:pos.x, y:pos.y, z:pos.z
            })
        }
    }
)