import './App.css';
import { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Personne: {
        fullName: "Bassirou Diomaye Faye",
        bio: "Bassirou Diomaye Faye, né le 25 mars 1980 à Ndiaganiao, est un homme d'État sénégalais, président de la république du Sénégal depuis le 2 avril 2024. Inspecteur des finances publiques, Bassirou Diomaye Faye est candidat à l'élection présidentielle de 2024 sous l'étiquette du PASTEF. Incarcéré durant onze mois, il est libéré de prison à neuf jours du scrutin présidentiel en compagnie d'Ousmane Sonko (qu'il remplace comme candidat car inéligible) et remporte l'élection avec 54,28 % des votes au premier tour. Il devient ainsi, à 44 ans, le plus jeune président de la république du Sénégal, le premier polygame et le premier opposant élu au premier tour de l'histoire du pays.",
        imgSrc: "https://prod.cdn-medias.jeuneafrique.com/cdn-cgi/image/q=auto,f=auto,metadata=none,width=1215,fit=cover,gravity=0.5000x0.5000/https://prod.cdn-medias.jeuneafrique.com/medias/2024/09/12/jad20240912-ass-senegal-dissolution-assemblee.jpg",
        Profession: "Président de la République du Sénégal"
      },
      show: true,
      timeElapsed: 0
    };

    this.profileShower = this.profileShower.bind(this);
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState((prevState) => ({
        timeElapsed: prevState.timeElapsed + 1
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  profileShower() {
    this.setState((prevState) => ({
      show: !prevState.show,
      timeElapsed: 0 // Réinitialiser le temps écoulé lorsque le composant est caché/monté
    }));
  }

  render() {
    return (
      <div>
        {this.state.show && (
          <div style={{ display: "flex", flexDirection: "column", margin: "50px", alignItems: "center", backgroundColor: "aliceblue", borderRadius: "20px" }}>
            <img style={{ width: "500px", borderRadius: "20px", marginTop: "20px" }} src={this.state.Personne.imgSrc} alt="Bassirou Diomaye" />
            <h2>Nom: {this.state.Personne.fullName}</h2>
            <h4>Profession: {this.state.Personne.Profession}</h4>
            <p style={{ padding: "20px" }}>{this.state.Personne.bio}</p>
            <p>Temps écoulé depuis le montage: {this.state.timeElapsed} secondes</p>
          </div>
        )}
        <button onClick={this.profileShower} style={{ display: "flex", justifySelf: "center" }}>
          {this.state.show ? 'Cacher le Profil' : 'Montrer le Profil'}
        </button>
      </div>
    );
  }
}

export default App;
