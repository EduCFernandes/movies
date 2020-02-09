import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  loading: boolean = false;

  movies = [
    {
      "title": "Whiplash",
      "year": "2014",
      "rated": "R",
      "runtime": "106 min",
      "genre": "Drama, Music",
      "director": "Damien Chazelle",
      "actors": "Miles Teller, J.K. Simmons, Melissa Benoist",
      "plot": "A promising young drummer enrolls at a cut-throat music conservatory where his dreams of greatness are mentored by an instructor who will stop at nothing to realize a student's potential.",
      "poster": "https://m.media-amazon.com/images/M/MV5BOTA5NDZlZGUtMjAxOS00YTRkLTkwYmMtYWQ0NWEwZDZiNjEzXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX675_CR0,0,675,999_AL_.jpg",
      "id": 1
    },
    {
      "title": "Pulp Fiction ",
      "year": "1994",
      "rated": "R",
      "runtime": "154 min",
      "genre": "Crime, Drama",
      "director": "Quentin Tarantino",
      "actors": "John Travolta, Uma Thurman, Samuel L. Jackson",
      "plot": "The lives of two mob hitmen, a boxer, a gangster & his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
      "poster": "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_CR0,0,686,1000_AL_.jpg",
      "id": 2
    },
    {
      "title": "Avengers: Endgame",
      "year": "2019",
      "rated": "PG-13",
      "runtime": "181 min",
      "genre": "Action, Sci-Fi, Adventure",
      "director": "Anthony Russo, Joe Russo",
      "actors": "Robert Downey Jr., Chris Evans, Mark Ruffalo, Chris Hemsworth, Scarlett Johansson",
      "plot": "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to undo Thanos' actions and restore order to the universe..",
      "poster": "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
      "id": 3
    },
    {
      "title": "The Wolf of Wall Street",
      "year": "2013",
      "rated": "R",
      "runtime": "180 min",
      "genre": "Biography, Comedy, Crime",
      "director": "Martin Scorsese",
      "actors": "Leonardo DiCaprio, Jonah Hill, Margot Robbie, Matthew McConaughey",
      "plot": "Based on the true story of Jordan Belfort, from his rise to a wealthy stock-broker living the high life to his fall involving crime, corruption and the federal government.",
      "poster": "https://m.media-amazon.com/images/M/MV5BMjIxMjgxNTk0MF5BMl5BanBnXkFtZTgwNjIyOTg2MDE@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
      "id": 4
    },
    {
      "title": "Interstellar",
      "year": "2014",
      "rated": "PG-13",
      "runtime": "169 min",
      "genre": "Adventure, Drama, Sci-Fi",
      "director": "Christopher Nolan",
      "actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
      "plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
      "poster": "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SY1000_SX675_AL_.jpg",
      "id": 5
    },
    {
      "title": "Doctor Strange",
      "year": "2016",
      "rated": "PG-13",
      "runtime": "115 min",
      "genre": "Action, Adventure, Fantasy",
      "director": "Scott Derrickson",
      "actors": "Rachel McAdams, Benedict Cumberbatch, Mads Mikkelsen, Tilda Swinton",
      "plot": "After his career is destroyed, a brilliant but arrogant and conceited surgeon gets a new lease on life when a sorcerer takes him under her wing and trains him to defend the world against evil.",
      "poster": "https://m.media-amazon.com/images/M/MV5BNjgwNzAzNjk1Nl5BMl5BanBnXkFtZTgwMzQ2NjI1OTE@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
      "id": 6
    },
    {
      "title": "The Silence of the Lambs",
      "year": "1991",
      "rated": "R",
      "runtime": "118 min",
      "genre": " Crime, Drama, Thriller",
      "director": "Jonathan Demme",
      "actors": "Jodie Foster, Anthony Hopkins, Lawrence A. Bonney",
      "plot": "A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer, a madman who skins his victims.",
      "poster": "https://m.media-amazon.com/images/M/MV5BNjNhZTk0ZmEtNjJhMi00YzFlLWE1MmEtYzM1M2ZmMGMwMTU4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY1000_CR0,0,677,1000_AL_.jpg",
      "id": 7
    },
    {
      "title": "Forrest Gump",
      "year": "1994",
      "rated": "PG-13",
      "runtime": "142 min",
      "genre": "Drama, Romance",
      "director": "Robert Zemeckis",
      "actors": "Tom Hanks, Robin Wright, Gary Sinise",
      "plot": "The presidencies of Kennedy and Johnson, the events of Vietnam, Watergate, and other history unfold through the perspective of an Alabama man with an IQ of 75.",
      "poster": "https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
      "id": 8
    },
    {
      "title": "The Green Mile",
      "year": "1999",
      "rated": "R",
      "runtime": "189 min",
      "genre": "Crime, Drama, Fantasy, Mystery",
      "director": "Frank Darabont",
      "actors": "Tom Hanks, Michael Clarke Duncan, David Morse",
      "plot": "The lives of guards on Death Row are affected by one of their charges: a black man accused of child murder and rape, yet who has a mysterious gift.",
      "poster": "https://m.media-amazon.com/images/M/MV5BMTUxMzQyNjA5MF5BMl5BanBnXkFtZTYwOTU2NTY3._V1_.jpg",
      "id": 9
    },
    {
      "title": "Rear Window",
      "year": "1954",
      "rated": "PG",
      "runtime": "112 min",
      "genre": "Mystery, Thriller",
      "director": "Alfred Hitchcock",
      "actors": "James Stewart, Grace Kelly, Wendell Corey",
      "plot": "A wheelchair-bound photographer spies on his neighbors from his apartment window and becomes convinced one of them has committed murder.",
      "poster": "https://m.media-amazon.com/images/M/MV5BNGUxYWM3M2MtMGM3Mi00ZmRiLWE0NGQtZjE5ODI2OTJhNTU0XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SY1000_CR0,0,683,1000_AL_.jpg",
      "id": 10
    },
    {
      "title": "The Shining",
      "year": "1980",
      "rated": "R",
      "runtime": "146 min",
      "genre": "Drama, Horror",
      "director": "Stanley Kubrick",
      "actors": "Jack Nicholson, Shelley Duvall, Danny Lloyd",
      "plot": "A family heads to an isolated hotel for the winter where a sinister presence influences the father into violence, while his psychic son sees horrific forebodings from both past and future.",
      "poster": "https://m.media-amazon.com/images/M/MV5BZWFlYmY2MGEtZjVkYS00YzU4LTg0YjQtYzY1ZGE3NTA5NGQxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
      "id": 11
    },
    {
      "title": "Eternal Sunshine of the Spotless Mind",
      "year": "2004",
      "rated": "R",
      "runtime": "108 min",
      "genre": "Drama, Romance, Sci-Fi",
      "director": "Michel Gondry",
      "actors": "Jim Carrey, Kate Winslet, Tom Wilkinson",
      "plot": "When their relationship turns sour, a couple undergoes a medical procedure to have each other erased from their memories.",
      "poster": "https://m.media-amazon.com/images/M/MV5BMTY4NzcwODg3Nl5BMl5BanBnXkFtZTcwNTEwOTMyMw@@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
      "id": 12
    },
    {
      "title": "Tonari no Totoro",
      "year": "2004",
      "rated": "G",
      "runtime": "86 min",
      "genre": "Animation, Family, Fantasy",
      "director": "Hayao Miyazaki",
      "actors": "Hitoshi Takagi, Noriko Hidaka, Chika Sakamoto",
      "plot": "When two girls move to the country to be near their ailing mother, they have adventures with the wondrous forest spirits who live nearby.",
      "poster": "https://m.media-amazon.com/images/M/MV5BNTdiOTQ0YmUtOGE3YS00NDg5LWI3YTEtNDAxZmE0MzRmZWM5L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SY1000_CR0,0,724,1000_AL_.jpg",
      "id": 13
    },
    {
      "title": "Room",
      "year": "2015",
      "rated": "R",
      "runtime": "118 min",
      "genre": "Drama, Thriller",
      "director": "Lenny Abrahamson",
      "actors": "Brie Larson, Jacob Tremblay, Sean Bridgers",
      "plot": "Held captive for 7 years in an enclosed space, a woman and her young son finally gain their freedom, allowing the boy to experience the outside world for the first time.",
      "poster": "https://m.media-amazon.com/images/M/MV5BMjE4NzgzNzEwMl5BMl5BanBnXkFtZTgwMTMzMDE0NjE@._V1_SY1000_SX675_AL_.jpg",
      "id": 14
    },
    {
      "title": "Into the Wild",
      "year": "2007",
      "rated": "R",
      "runtime": "148 min",
      "genre": "Adventure, Biography, Drama",
      "director": "Sean Penn",
      "actors": "Emile Hirsch, Vince Vaughn, Catherine Keener",
      "plot": "After graduating from Emory University, top student and athlete Christopher McCandless abandons his possessions, gives his entire $24,000 savings account to charity and hitchhikes to Alaska to live in the wilderness. Along the way, Christopher encounters a series of characters that shape his life.",
      "poster": "https://m.media-amazon.com/images/M/MV5BMTAwNDEyODU1MjheQTJeQWpwZ15BbWU2MDc3NDQwNw@@._V1_.jpg",
      "id": 15
    }
  ];
  constructor() { }

  ngOnInit() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 1000);
  }
}
