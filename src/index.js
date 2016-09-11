function s(){
    if(arguments.length===0 || typeof arguments[0] !== "string"){
        return;
    }
    var args = [];
    Array.prototype.push.apply( args, arguments );
    var targetArr = [];
    var org = args.shift();
    for(var i=0;i<org.length;){
        if(org[i]==="%"){
            i++;
            if(org[i]==="%"){
                targetArr.push(org.slice(0,i));
                org = org.slice(i+1);
                i=0;
                continue;
            }else if(org[i]==="s"){
                targetArr.push(org.slice(0,i-1));
                targetArr.push(args.shift());
                org = org.slice(i+1);
                i=0;
                continue;
            }
        }
        i++;
    }
    targetArr.push(org);
    return targetArr.join("");
}


var Noodle = require("noodle");
function initNewGroup(groupEl,checkallEl){
    var $group = Noodle(groupEl);
    var $checkallEl = Noodle(checkallEl);
    var checkboxGroupName = $checkallEl.$getAttribute("target-checkbox").getReturn();
    var inputSel;
    if(checkboxGroupName){
        inputSel = s("input[name=%s]",checkboxGroupName);
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
