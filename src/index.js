
var Noodle = require("noodle");
function initNewGroup(groupEl,checkallEl){
    var $group = Noodle(groupEl);
    var $checkallEl = Noodle(checkallEl);
    var checkboxGroupName = $checkallEl.$getAttribute("target-checkbox").getReturn();
    var inputSel;
    if(checkboxGroupName){
        inputSel = "input[name="+checkboxGroupName+"]";
    }else{
        inputSel = "input[name]";
    }
    $checkallEl.$addEventListener("click",function(e){
        var checked = this.checked;
        console.log(checked);
        $group.$querySelector(inputSel).forEach(function(item){
            item.checked = checked;
        });
    });
    $group.$on("click",inputSel,function(){
        var result = checkGroupCheckStatus($group,inputSel);
        if(result===1){
            checkallEl.checked = true;
        }else{
            checkallEl.checked = false;
        }
    });
}
function checkGroupCheckStatus($group,inputSel){
    var length = $group.$querySelector(inputSel).length;
    var checkedLength = $group.$querySelector(inputSel+":checked").length;
    if(checkedLength === 0){
        return 0;
    }else if(checkedLength === length){
        return 1;
    }else{
        return -1;
    }
}
module.exports = initNewGroup;
