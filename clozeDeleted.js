// ClozeCard

function ClozeCard(text, cloze) {
  if(this instanceof ClozeCard) {
    this.fullText = text;
    this.cloze = cloze;
    this.partial = text.replace(cloze, "---");

    this.brokenCloze = text.indexOf(cloze);

    if (this.brokenCloze === -1 ) {throw new Error('Ooops, wrong phrase slected');}

    // error checking return custom error // cathcing error when checking someone elses code
    // try {
    // 	if(this.brokenCloze === -1)
    // 		throw new Error("this suucks");
    // } catch(e) {
    // 	//console.log(e.message);
    // 	console.log(e.name+": "+e.message)
    // }

  } else {
    return new ClozeCard(text, cloze);
  }
}


module.exports = ClozeCard;