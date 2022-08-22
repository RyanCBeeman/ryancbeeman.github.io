//The Skill Tree

function growTree(){
  console.log("tree grown");
  getElement("skillTreeContainer").style.display = "inline-block";
  getElement("treePic").src = "images/TreePics/tree_1.png"
}

function buySkill(i){
  console.log("bought skill " + i)
}