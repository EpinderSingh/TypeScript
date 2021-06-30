interface Vehicle {
  name: string;
  year: Date;
  broken: boolean;
}

const oldCivic = {
  name: 'civic',
  year: new Date(),
  broken: true,
};

const printVehicle = (vehicle: Vehicle): void => {
  const y = vehicle.year.getUTCFullYear();
  console.log(`Name: ${vehicle.name}`);
  console.log(`Year: ${y}`);
  console.log(`Broken: ${vehicle.broken}`);
};

printVehicle(oldCivic);
