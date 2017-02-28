initialCats = [
    {
        clickCount: 0,
        name: 'Tabby',
        imgSrc: 'img/434164568_fea0ad4013_z.jpg',
        imgAttribution: 'https://www.flickr.com/photos/',
        nicknames: ['Tabtab', 'T-Bone', 'Mr. T', 'Taby catty cat']
    },

    {
        clickCount: 0,
        name: 'Sleepy',
        imgSrc: 'img/22252709_010df3379e_z.jpg',
        imgAttribution: 'https://www.flickr.com/photos/',
        nicknames: ['zzzzzzz']
    },

    {
        clickCount: 0,
        name: 'Tiger',
        imgSrc: 'img/4154543904_6e2428c421_z.jpg',
        imgAttribution: 'https://www.flickr.com/photos/',
        nicknames: ['Tire'] 
    }
]

var Cat = function(data) {
    this.clickCount = ko.observable(data.clickCount);
    this.name = ko.observable(data.name);
    this.imgSrc = ko.observable(data.imgSrc);
    this.imgAttribution = ko.observable(data.imgAttribution);
    var catLevel = ['Newborn', 'Infant', 'Teen'];
    this.nicknames = ko.observableArray(data.nicknames);
    this.level = ko.computed(function() {
        var k = 1,
            ans;
        
        for(let i = 0; i < catLevel.length; i++) {
            ans = catLevel[i];
            if (k * 10  > this.clickCount()) break;
            k *= 10;
        }
        return ans;
    }, this);
}

var ViewModel = function() {
    self = this;
    this.catList = ko.observableArray([]);
    initialCats.forEach(function(catItem) {
        //console.log(catItem);
        self.catList.push(new Cat(catItem));
    });
    this.currentCat = ko.observable(new Cat(initialCats[0]));
    this.incrementCounter = function() {
        self.currentCat().clickCount(self.currentCat().clickCount() + 1);

    }
    this.setNewCat  =  function(cat) {
        self.currentCat(cat)
    }
}

ko.applyBindings(new ViewModel());