import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Movies App';
  movies = [
    {
      id: 1,
      title: 'Mortal Kombat',
      imgUrl: 'https://www.themoviedb.org/t/p/w220_and_h330_face/w8BVC3qrCWCiTHRz4Rft12dtQF0.jpg',
    },
    {
      id: 2,
      title: 'Godzilla vs. Kong',
      imgUrl: 'https://www.themoviedb.org/t/p/w220_and_h330_face/klAIFewuqcyEmH1SMtR2XbMyqzM.jpg',
    },
    {
      id: 3,
      title: 'Liga da Justiça de Zack Snyder',
      imgUrl: 'https://www.themoviedb.org/t/p/w220_and_h330_face/ArWn6gCi61b3b3hclD2L0LOk66k.jpg',
    },
    {
      id: 4,
      title: 'Sociedade da Justiça: 2ª Guerra Mundial',
      imgUrl: 'https://www.themoviedb.org/t/p/w220_and_h330_face/haFimehtZoP6rSz53kEqXSKianS.jpg',
    },
    {
      id: 5,
      title: 'Mulher-Maravilha 1984',
      imgUrl: 'https://www.themoviedb.org/t/p/w220_and_h330_face/qDA95ebiy3W3m8hTRB3xZNZVVBM.jpg',
    },
    {
      id: 6,
      title: 'Crocodilos: A Morte Te Espera',
      imgUrl: 'https://www.themoviedb.org/t/p/w220_and_h330_face/9I2ATBaOfwXo23vSBfEAQ3uZhGV.jpg',
    },
    {
      id: 7,
      title: 'Os Croods 2: Uma Nova Era',
      imgUrl: 'https://www.themoviedb.org/t/p/w220_and_h330_face/vRTScutueW9gLF3dSo2Za7o0v7n.jpg',
    },
    {
      id: 8,
      title: 'Passageiro Acidental',
      imgUrl: 'https://www.themoviedb.org/t/p/w220_and_h330_face/n91IdvTOxogvs08HN0mYK7nY5T7.jpg',
    },
    {
      id: 9,
      title: 'Rise of the Mummy',
      imgUrl: 'https://www.themoviedb.org/t/p/w220_and_h330_face/tmghT8HaddVIS9hEXIOI9GuDchi.jpg',
    },
    {
      id: 10,
      title: 'Jiu Jitsu',
      imgUrl: 'https://www.themoviedb.org/t/p/w220_and_h330_face/eLT8Cu357VOwBVTitkmlDEg32Fs.jpg',
    },
  ];

  listedMovies = [];

  filterMovie(name){
    const results = this.movies.filter(m => m.title.startsWith(name));
    if(results.length > 0){
      this.listedMovies = results;
    } else {
      this.listedMovies = this.movies;
    }
  }
}
