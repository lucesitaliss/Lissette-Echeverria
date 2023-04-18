const abautme = () => {
  const I = {
    name: "Lissette",
    lastName: "Echeverría Montes de Oca",
    profession: "Fullstack developer ",
    mainTechnologies: [
      "HTML5",
      "Node Js",
      "React Js",
      "Redux",
      "Express Js",
      "Next Js",
      "SQL",
      "Postgres",
      "TypeScript",
    ],
  };
  const technologyformatted = I.mainTechnologies.map((tecnologie, index) => {
    return index === 0 ? tecnologie : " " + tecnologie;
  });

  return `Hello, mi name is ${I.name}, my profession is ${I.profession} and my main technologies are ${technologyformatted}`;
};

abautme();
