class Book {
    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }

    getInfo() {
        return `${this.title} by ${this.author}, ${this.pages} pages`;
    }

    read() {
        return `Reading ${this.title}...`;
    }
}

class Adventure extends Book {
    constructor(title, author, pages, difficulty, setting) {
        super(title, author, pages);
        this.difficulty = difficulty;
        this.setting = setting;
    }

    getInfo() {
        return `${super.getInfo()} - An adventurous story set in ${this.setting}`;
    }

    read() {
        return `${super.read()} This adventure is quite ${this.difficulty}!`;
    }

    explore() {
        return `Exploring the world of ${this.title}...`;
    }
}

class Satire extends Book {
    constructor(title, author, pages, humorType, target) {
        super(title, author, pages);
        this.humorType = humorType;
        this.target = target;
    }

    getInfo() {
        return `A satirical masterpiece: ${super.getInfo()}`;
    }

    read() {
        return `${super.read()} The humor is ${this.humorType}.`;
    }

    mock() {
        return `Mocking ${this.target} with sharp wit!`;
    }
}

class Fantasy extends Book {
    constructor(title, author, pages, magicSystem, mainRace) {
        super(title, author, pages);
        this.magicSystem = magicSystem;
        this.mainRace = mainRace;
    }

    getInfo() {
        return `${super.getInfo()} - A fantasy world filled with ${this.mainRace}`;
    }

    read() {
        return `${super.read()} Prepare to experience ${this.magicSystem} magic!`;
    }

    summon() {
        return `Summoning a mystical creature from ${this.title}...`;
    }
}
