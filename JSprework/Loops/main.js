let myPlaces = ['Mumbai','Capetown','Florence']
let friendPlaces = ['Rome','Parma','Florence']

for (let myPlacesIndex = 0; myPlacesIndex < myPlaces.length; myPlacesIndex++) {
  for (let friendPlacesIndex = 0; friendPlacesIndex < friendPlaces.length; friendPlacesIndex++) {
		if (myPlaces[myPlacesIndex] === friendPlaces[friendPlacesIndex]) {
      console.log(friendPlaces[friendPlacesIndex]);
    }
  }
}
