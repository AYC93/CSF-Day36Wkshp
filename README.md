# CSF-Day36Wkshp
Data added to array not persisting, consider adding to service or to localstorage to be retrieved:

addCity() {
  const newCity = this.form.value.city;

  if (!this.defaultCities.includes(newCity)) {
    this.defaultCities.push(newCity);
    console.info(">>>> new cities added: ", newCity);
    console.info(">>>> list of cities: ", this.defaultCities);

    localStorage.setItem('cities', JSON.stringify(this.defaultCities));
  }
}

// added when initialised since back button reloads the page and reinitialise the page
ngOnInit(): void {
  this.form = this.createForm();

  // Retrieve the cities from localStorage
  const storedCities = localStorage.getItem('cities');
  if (storedCities) {
    this.defaultCities = JSON.parse(storedCities);
  }
