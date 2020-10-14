import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-featured',
  templateUrl: './featured.page.html',
  styleUrls: ['./featured.page.scss'],
})
export class FeaturedPage implements OnInit {

    public photos = [
      {
        id: 'Paçoca',
        place: "São Paulo/SP",
        url: 'https://placedog.net/500/500?id=147',
        user: 'Pedro',
        tempo: '5 meses',
        descricao: 'Olá, sou o Paçoca! Tenho só 8 meses e estou procurando uma familia que me dê muiiiiito amor. Juro que sou bonzinho e já sei usar tapete! Que tal me dar uma oportunidade? ',
      },

      {
        id: 'Darth Vader',
        place: "Campinas/SP",
        url: 'https://static1.patasdacasa.com.br/articles/1/35/1/@/1093-gatos-pretos-sao-animais-fascinantes-co-opengraph_1200-4.jpg',
        user: 'João',
        tempo: '4 meses',
        descricao: 'Olá, sou o Darth! Tenho 2 aninhos e estou procurando uma familia que me dê muiiiiito amor. Juro que sou bonzinho e amo brincar! Que tal me dar uma oportunidade? ',
      },

      {
        id: 'Bolinha',
        place: "Rio Branco/AC",
        url: 'https://catracalivre.com.br/wp-content/uploads/2018/01/cachorro.jpg',
        user: 'Zéca',
        tempo: '3 meses e meio',
        descricao: 'Olá, sou o Bolinho! Tenho 1 aninho e estou procurando uma familia que me dê muiiiiito amor. Juro que sou bonzinho, mas olha... amo brincar com a minha bolinha! Que tal me dar uma oportunidade? ',
      },
      
      {
        id: 'Patinha',
        place: "Manaus/AM",
        url: 'https://extra.globo.com/incoming/18783916-934-202/w488h275-PROP/kitty5.jpg',
        user: 'Maria',
        tempo: '2 Meses',
        descricao: 'Olá, sou a Patinha! Tenho 2 aninhos e estou procurando uma familia que me dê muiiiiito amor. Juro que sou bonzinha! Que tal me dar uma oportunidade? ',
      },

      {
        id: 'Brothers',
        place: "São Paulo/São Carlos",
        url: 'https://i.pinimg.com/originals/49/ac/51/49ac5149b9ca897af28d4a5d93d99d64.jpg',
        user: 'Priscila',
        tempo: '1 Mês',
        descricao: 'Sim, aqui a adoção é em dobro! Precisamos de um lar disposto a receber irmãos que se amam demais! Irmão pintado: Ted. Irmão caramelo: Batman. Que tal nos dar uma oportunidade? ',
      }

    ]

  constructor() { }

  ngOnInit() {
  }

}
