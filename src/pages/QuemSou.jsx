import { Avatar } from '../components/Avatar';
import { Bio } from '../components/Bio';
import { Usuario } from '../components/Usuario';

const redes = [
  {
    icone: 'bi-linkedin',
    link: 'https://www.linkedin.com/in/ericocoutojr/',
  },
  {
    icone: 'bi-instagram text-danger',
    link: 'https://www.instagram.com/ericocoutojr/',
  },
  {
    icone: 'bi-github text-light-emphasis',
    link: 'https://github.com/EricoCoutoJr/',
  },
];

export const QuemSou = () => {
  return (
    <div className="">
      <div className="row border-bottom py-2">
        <div className="col-2">
          <Avatar
            src="https://avatars.githubusercontent.com/u/63860659?v=4"
            alt="Erico Couto Jr no Lab 365"
          />
        </div>
        <div className="col ">
          <Usuario
            nome="Erico Couto Jr."
            cargo="Aluno DevFullStack"
            redes={redes}
          />
        </div>
      </div>
      <div className="row mt-4">
        <Bio>
          <p className="fw-light">
            Desenvolvendo novas habilidades e conhecimento na área de WEB com
            apendizado em HTML, JavaScript e React.
          </p>
          <p className="fw-light">
            Neste projeto foram implementados o uso de custom hooks, context,
            router, class components e children props. E por fim, a otimização
            de funções em módulos que inicialmente foram implementados como
            classe.
          </p>
        </Bio>
      </div>
    </div>
  );
};
