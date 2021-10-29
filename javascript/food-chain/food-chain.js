export class Song {

  constructor() {
    this.lyrics = [];
    this.animals = [
      {
        predator: "fly"
      },
      {
        predator: "spider",
        prey: "fly",
        statement: "It wriggled and jiggled and tickled inside her.",
      },
      { 
        predator: "bird",
        prey: "spider",
        statement: "How absurd to swallow a bird!",
      },
      { 
        predator: "cat",
        prey: "bird",
        statement: "Imagine that, to swallow a cat!",
      },
      {
        predator: "dog",
        prey: "cat",
        statement: "What a hog, to swallow a dog!",
      },
      {
        predator: "goat",
        prey: "dog",
        statement: "Just opened her throat and swallowed a goat!",
      },
      {
        predator: "cow",
        prey: "goat",
        statement: "I don't know how she swallowed a cow!",
      },
      {
        predator: "horse",
        prey: "cow",
        statement: "She's dead, of course!",
      }
    ];
    
  }

  formatLyrics() {
    return `${this.lyrics.join("\n")}\n`;
  }

  addLine(line) {
    if(line !== undefined) {
      this.lyrics.push(line);
    }
  }

  addBeginning(predator) {
    this.addLine(`I know an old lady who swallowed a ${predator}.`);
  }

  addReason(predator, prey) {
    if(predator === "horse" || predator === "fly") {
      return;
    }

    if(predator === "bird") {
      this.addLine(`She swallowed the ${predator} to catch the ${prey} that wriggled and jiggled and tickled inside her.`)
    } else {
      this.addLine(`She swallowed the ${predator} to catch the ${prey}.`)
    }
  }

  addEnding(predator) {
    if(predator === "horse") {
      return;
    }
    
    this.addLine("I don't know why she swallowed the fly. Perhaps she'll die.");
  }  

  verse(number) {
    let animal = this.animals[number-1];
    this.addBeginning(animal.predator);
    this.addLine(animal.statement);
    if(number !== this.animals.length) {
      for(let i = number; i > 0; i--) {
        animal = this.animals[i-1];
        this.addReason(animal.predator, animal.prey);
      }
    }
    this.addEnding(animal.predator);
    return this.formatLyrics();
  }

  verses(start, end) {
    for(let i = start; i <= end; i++) {
      this.verse(i);
      this.addLine("");
    }
    return this.formatLyrics();
  }
}
