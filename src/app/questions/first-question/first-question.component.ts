import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {BookModel} from '../../models/book.model';

@Component({
  selector: 'app-first-question',
  templateUrl: './first-question.component.html',
  styleUrls: ['./first-question.component.scss']
})
export class FirstQuestionComponent implements OnInit {

  knowledgeBase: Array<BookModel>

  bookIndex = 0;

  index = 0;

  form: FormGroup;

  results: Array<BookModel>;

  constructor(private _fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this._fb.group({
      age: new FormControl(null, [Validators.required, Validators.min(12)]),
      category: new FormControl(null, Validators.required),
      priceStart: new FormControl(null, [Validators.required, Validators.min(0), Validators.max(600)]),
      priceEnd: new FormControl(null, [Validators.required, Validators.min(0), Validators.max(600)]),
      releaseStart: new FormControl(null, [Validators.required, Validators.min(1900), Validators.max(2021)]),
      releaseEnd: new FormControl(null, [Validators.required, Validators.min(1900), Validators.max(2021)]),
      pagesStart: new FormControl(null, [Validators.required, Validators.min(200), Validators.max(600)]),
      pagesEnd: new FormControl(null, [Validators.required, Validators.min(200), Validators.max(600)])
    });

    this.form.markAllAsTouched();

    this.initializeArray();


    this.form.valueChanges.subscribe(form => {
      this.showResult();
    })
  }

  showResult(){
    this.results = [];
    this.knowledgeBase.forEach(book => {
      if(parseInt(book.price) > this.form.controls['priceStart'].value
        && parseInt(book.price) < this.form.controls['priceEnd'].value
        && this.form.controls['age'].value >= book.age
        && this.form.controls['category'].value === book.category
        && this.form.controls['releaseStart'].value < book.releaseDate
        && this.form.controls['releaseEnd'].value > book.releaseDate
        && this.form.controls['pagesStart'].value < book.pages
        && this.form.controls['pagesEnd'].value > book.pages){
        this.results.push(book);
      }
    })
    console.log(this.results);
  }

  condition(){}

  back(){
    this.index >0 ? this.index-- : null;
  }

  nextPage() {
    this.index < 7 ? this.index++ : null;
  }

  check(){
    console.log(this.form);
  }

  initializeArray(){
    this.results = [];
    this.knowledgeBase = [
      {
        title: 'Sapiens',
        age: 18,
        pages: 200,
        releaseDate:1920,
        category: 'history',
        author: 'Yuval Noah Harari',
        price: '71',
        description: 'Yuval Noah Harari challenges everything we know about being human in the perfect read for these unprecedented times.'
      },
      {
        title: 'The Secret History, A Brief History of Tomorrow',
        age: 24,
        pages: 320,
        releaseDate:1980,
        category: 'history',
        author: 'Donna Tartt',
        price: '60',
        description: 'The Secret History is a remarkable achievement - both compelling and elegant, dramatic and playful.'
      },
      {
        title: 'Homo Deus, A Brief History of Tomorrow',
        age: 12,
        pages: 480,
        releaseDate:1910,
        category: 'history',
        author: 'Yuval Noah Harari',
        price: '75',
        description: 'Homo Deus explores the projects, dreams and nightmares that will shape the twenty-first century and beyond - from overcoming death to creating artificial life.'
      },
      {
        title: 'Lessons of History',
        age: 12,
        pages: 415,
        releaseDate:1925,
        category: 'history',
        author: 'Durant',
        price: '50',
        description: 'The result is a survey of human history, full of dazzling insights into the nature of human experience, the evolution of civilization, and the culture of man.'
      },
      {
        title: 'A Short History of the Middle East, From Ancient Empires to Islamic State',
        age: 18,
        pages: 350,
        releaseDate:1930,
        category: 'history',
        author: 'Gordon Kerr',
        price: '30',
        description: 'Situated at the crossroads of three continents, the Middle East has confounded the ambition of conquerors and peacemakers alike.'
      },
      {
        title: 'A Brief History of the Vikings',
        age: 12,
        pages: 200,
        releaseDate:1935,
        category: 'history',
        author: 'Jonathan Clements',
        price: '40',
        description: ' Between the eighth and eleventh centuries, the Vikings surged from their Scandinavian homeland to trade, raid and invade along the coasts of Europe.'
      },
      {
        title: 'History, From the Dawn of Civilization to the Present Day',
        age: 24,
        pages: 350,
        releaseDate:1940,
        category: 'history',
        author: '',
        price: '275',
        description: 'This comprehensive and compelling visual encyclopaedia tells the story of our world in true depth and detail, from the origins of life on Earth right up until the 21st century.'
      },
      {
        title: 'History Is All You Left Me',
        age: 32,
        pages: 370,
        releaseDate:1935,
        category: 'history',
        author: 'Adam Silvera',
        price: '50',
        description: "You're still alive in alternate universes, Theo, but I live in the real world where this morning you\'re having an open casket funeral. "
      },
      {
        title: 'A Brief History of the Celts',
        age: 24,
        pages: 300,
        releaseDate:1944,
        category: 'history',
        author: 'Peter Ellis',
        price: '30',
        description: ' Even after their conquest by the Romans, their culture remained vigorous, ensuring that much of it endured to feed an endless fascination with Celtic history and myths, artwork and treasures.'
      },
      {
        title: 'I Am Legend ',
        age: 15,
        pages: 240,
        releaseDate:1957,
        category: 'science',
        author: 'YRichard Matheson ',
        price: '70',
        description: 'Every other man, woman and child on the planet has become a vampire, and they are hungry for Nevilles blood.'
      },
      {
        title: 'Hardware: The Definitive SF Works of Chris Foss',
        age: 18,
        pages: 320,
        releaseDate:1963,
        category: 'science',
        author: 'Chriss Foss',
        price: '80',
        description: 'The Secret History is a remarkable achievement - both compelling and elegant, dramatic and playful.'
      },
      {
        title: 'Dangerous Visions ',
        age: 12,
        pages: 580,
        releaseDate:1968,
        category: 'science',
        author: 'Harlan Ellison',
        price: '100',
        description: 'Anthologies seldom make history, but Dangerous Visions is a grand exception.'
      },
      {
        title: 'Varjak Paw',
        age: 14,
        pages: 520,
        releaseDate:1975,
        category: 'science',
        author: 'Dave McKean',
        price: '60',
        description: 'He lives high up in an old house on a hill. He\'s never left home, but then his grandfather tells him about the Way - a secret martial art for cats'
      },
      {
        title: 'The Mammoth Book of Apocalyptic SF ',
        age: 12,
        pages: 450,
        releaseDate:1976,
        category: 'science',
        author: 'Mike Ashley',
        price: '50',
        description: 'The last sixty years have been full of stories of one or other possible Armageddon, whether by nuclear war, plague, cosmic catastrophe or, more recently, global warming, terrorism, genetic engineering, AIDS and other pandemics.'
      },
      {
        title: 'Non-Stop',
        age: 24,
        pages: 560,
        releaseDate:1986,
        category: 'science',
        author: 'Brian Aldiss',
        price: '70',
        description: "Its members lived out their lives in cramped Quarters, hacking away at the encroaching ponics. As to where they were - that was forgotten."
      },
      {
        title: 'The Mammoth Book of SF Wars',
        age: 18,
        pages: 400,
        releaseDate:1945,
        category: 'science',
        author: 'Ian Whates',
        price: '60',
        description: "War is becoming increasingly 'SF-ized' with remotely controlled attack drones and robot warriors already in development and being tested."
      },
      {
        title: 'Arslan',
        age: 12,
        pages: 500,
        releaseDate:1965,
        category: 'crime',
        author: 'M.J.Engh',
        price: '70',
        description: "Arslan is a young Asian general who has conquered the USA and then the world, with a small town in Illinois as the capital of his new empire."

      },
      {
        title: 'he Mysteries of Udolpho ',
        age: 24,
        pages: 270,
        releaseDate:1921,
        category: 'crime',
        author: 'Ann Radcliffe',
        price: '50',
        description: "Fresh with grief for her recently-deceased father and forced to live with an aunt who doesn't want her, Emily is plunged into a nightmarish world in this terrifying gothic classic by Ann Radcliffe."
      },
      {
        title: 'The Bully Trap ',
        age: 24,
        pages: 550,
        releaseDate:1928,
        category: 'crime',
        author: 'Fraser and Spencer',
        price: '40',
        description: 'Aveteran of the Second Afghan War, broken inside and out, he struggles to build a new life for himself.'
      },
      {
        title: 'Inception',
        age: 18,
        pages: 600,
        releaseDate:1937,
        category: 'crime',
        author: 'Sf Benson',
        price: '90',
        description: 'For seven hundred long years, she\'s dealt with everything from plagues and witch hunts, to a crushing lost love.'
      },
      {
        title: 'Rebel Inception The Alliance Chronicles',
        age: 21,
        pages: 480,
        releaseDate:1966,
        category: 'crime',
        author: 'Mark Twain',
        price: '80',
        description: 'Some secrets are costlier than others.'
      },
      {
        title: 'Rebel Inception The Alliance Chronicles',
        age: 32,
        pages: 300,
        releaseDate:1975,
        category: 'crime',
        author: 'Nick Van Der Leek',
        price: '95',
        description: 'The second narrative in the SILVER FOX trilogy true crime rocket scientist Nick van der Leek analyzes the Chris Watts case in a brand new way - through the prism of marriage.'
      },
      {
        title: 'Jessie Douglas Kerruish',
        age: 18,
        pages: 340,
        releaseDate:1983,
        category: 'crime',
        author: 'Jessie Douglas Kerruish',
        price: '40',
        description: 'With a vengeful werewolf and a dark family secret this is an early horror original crawling with supernatural suspense.'
      },
      {
        title: 'Nineteen Eighty-Four',
        age: 19,
        pages: 470,
        releaseDate:1989,
        category: 'crime',
        author: 'George Orwell',
        price: '45',
        description: ' With a new introduction by Professor Richard Bradford this edition takes a fresh look at one of the great works of the twentieth century.'
      },
      {
        title: 'The Three Impostors',
        age: 18,
        pages: 290,
        releaseDate:1963,
        category: 'romance',
        author: 'Arthur Machen ',
        price: '30',
        description: 'Stories woven together with the devious threads of dark magic create the ultimate in horror fiction by the gruesome Arthur Machen.'
      },
      {
        title: 'The Monk',
        age: 20,
        pages: 350,
        releaseDate:1946,
        category: 'romance',
        author: 'Matthew Lewis',
        price: '50',
        description: 'An original gothic masterpiece of madness, lust and terror. Dripping with dark and moody intent, Matthew Lewis introduces us to the sinful world of Ambrosio, a monk in an ominous Madrid monastery.'
      },
      {
        title: 'Finding me',
        age: 18,
        pages: 600,
        releaseDate:1951,
        category: 'romance',
        author: 'Sf Benson',
        price: '90',
        description: 'Sometimes loving someone means finding yourself first.'
      },
      {
        title: 'The Key: A Perilous Pauline SF Romance',
        age: 21,
        pages: 400,
        releaseDate:1928,
        category: 'romance',
        author: 'Pauline Baird Jones',
        price: '110',
        description: 'Sara Donovan knew her top-secret expedition would be dangerous.'
      },
      {
        title: 'Buying his Omega : MF Omegaverse SF Romance',
        age: 24,
        pages: 520,
        releaseDate:1938,
        category: 'romance',
        author: 'Juno Wells',
        price: '70',
        description: 'Alpha Ryder isn\'t looking for an Omega, but when he sees Daisy being auctioned to the highest bidder, he can\'t resist bidding on her.'
      },
      {
        title: 'The Invisible Man',
        age: 12,
        pages: 200,
        releaseDate:1954,
        category: 'romance',
        author: 'H.G Wells',
        price: '40',
        description: 'A fantastic masterpiece of mystery and science fiction.'
      },
      {
        title: 'Wuthering Heights',
        age: 21,
        pages: 400,
        releaseDate:1961,
        category: 'romance',
        author: 'Emily Bronte',
        price: '100',
        description: 'A powerful gothic tale of passion, romance and unrequited love.'
      },
      {
        title: 'The House Of The Seveng Gables',
        age: 24,
        pages: 430,
        releaseDate:1952,
        category: 'romance',
        author: 'Nathaniel Hawthorne',
        price: '40',
        description: 'The House of the Seven Gables is a gloomy New England mansion, reeking of past sins and malevolent threats.'
      },
      {
        title: 'Northanger Abbey',
        age: 18,
        pages: 250,
        releaseDate:1961,
        category: 'romance',
        author: 'Jane Austen',
        price: '50',
        description: 'Catherine Morland is an excitable young woman enraptured by the imaginary romantic worlds of mystery and intrigue in the gothic novels she consumes voraciously in her country cottage home.'
      },
      {
        title: 'Spring Cannot Be Cancelled',
        age: 20,
        pages: 425,
        releaseDate:1948,
        category: 'art',
        author: 'David Hockney',
        price: '140',
        description: 'The only real things in life are food and love, in that order, just like [for] our little dog Ruby... and the source of art is love. I love life.\''
      },
      {
        title: 'Musicals: The Definitive Illustrated Story',
        age: 18,
        pages: 330,
        releaseDate:1971,
        category: 'art',
        author: 'Elaine Paige',
        price: '250',
        description: 'Come along backstage and peek inside the spectacular and sometimes scandalous world of musical theatre.'
      },
      {
        title: 'A Marvelous Life: The Amazing Story Of Stan Lee',
        age: 21,
        pages: 600,
        releaseDate:1984,
        category: 'art',
        author: 'Danny Fingeroth',
        price: '90',
        description: 'Fingeroth, himself a longtime writer and editor at Marvel Comics and now a lauded pop culture critic and historian, knew and worked with Stan Lee for over three decades.'
      },
      {
        title: 'London: Portrait of a City',
        age: 12,
        pages: 500,
        releaseDate:1969,
        category: 'art',
        author: 'Reuel Golden',
        price: '280',
        description: 'London\'s remarkable history, architecture, landmarks, streets, style, cool, swagger, and stalwart residents are pictured in hundreds of compelling photographs sourced from a wide array of archives around the world.'
      },
      {
        title: 'Todd Webb In Africa: Outside The Frame',
        age: 18,
        pages: 240,
        releaseDate:1960,
        category: 'art',
        author: 'Erin Hyde Nolan',
        price: '220',
        description: 'Todd Webb is largely known for his skillful photographic documentation of everyday life and architecture in cities, most notably New York and Paris, as well as his photographs of the American West.'
      },
      {
        title: 'Logo Modernism',
        age: 21,
        pages:310,
        releaseDate:1933,
        category: 'art',
        author: 'R. Roger Remington',
        price: '350',
        description: 'Modernist aesthetics in architecture, art, and product design are familiar to many.'
      },
      {
        title: 'The Dressmaking Book: Over 80 Techniques',
        age: 19,
        pages: 314,
        releaseDate:1999,
        category: 'art',
        author: 'Alison Smith',
        price: '170',
        description: 'Fully illustrated and easy to use, this dressmaking book covers all the essential skills and techniques you need to make timeless wardrobe staples. It\'s a must-have for beginners and expert stitchers alike.'
      },
    ]
  }

}
