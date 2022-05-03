const franchise = {
  name: 'RHOA',
  id: 1,
  housewives: ['NeNe', 'DeShawn', 'Lisa', 'Shereé', 'Kim']
};

const getInfo = (franchise) => {
  console.log(`Season ${franchise.id} - ${franchise.name} - ${franchise.housewives.length} housewives in this season`)
}

getInfo(franchise);