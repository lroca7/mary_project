import React from 'react';
import './Hobbies.scss';

interface HobbyItem {
  name: string;
  icon: string;
  description: string;
}

const Hobbies: React.FC = () => {
  const hobbyItems: HobbyItem[] = [
    {
      name: "Lectura",
      icon: "📚",
      description: "Disfruto de la literatura en varios idiomas, especialmente novelas históricas y poesía."
    },
    {
      name: "Senderismo",
      icon: "🥾",
      description: "Me encanta explorar la naturaleza y hacer caminatas por senderos en montañas y bosques."
    },
    {
      name: "Cocina Internacional",
      icon: "🍳",
      description: "Experimentar con recetas de diferentes culturas es una de mis pasiones."
    },
    {
      name: "Fotografía",
      icon: "📷",
      description: "Capturar momentos especiales y paisajes mientras viajo."
    },
    {
      name: "Yoga",
      icon: "🧘‍♀️",
      description: "Practico yoga regularmente para mantener el equilibrio físico y mental."
    }
  ];

  return (
    <section className="hobbies-section">
      <h3>Pasatiempos</h3>
      <div className="hobbies-items">
        {hobbyItems.map((item, index) => (
          <div key={index} className="hobby-item">
            <div className="hobby-icon">{item.icon}</div>
            <div className="hobby-content">
              <h4>{item.name}</h4>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hobbies;
