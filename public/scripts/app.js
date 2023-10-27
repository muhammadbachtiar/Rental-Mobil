function filterCars(car) {
    const tipeDriver = document.getElementById("tipeDriver").value;
    const tanggal = document.getElementById("tanggal").value;
    const waktu = document.getElementById("waktu").value;
    const jumlahPenumpang = document.getElementById("orang").value;
    const carAvailableAt = new Date(car.availableAt);
    const driver = tipeDriver == 1 ? true : false;


    if (tipeDriver !== "Pilih Tipe Driver" && tanggal && waktu &&  jumlahPenumpang) {
      return (
        car.isWithDriver === driver &&
        carAvailableAt >= new Date(tanggal + "T" + waktu) &&
        car.capacity >= jumlahPenumpang
      );
    }

    if (tipeDriver !== "Pilih Tipe Driver" && tanggal && waktu) {
        return (
          car.isWithDriver === driver &&
          car.availableAt >= new Date(tanggal + "T" + waktu)
        );
      }
  
    return true;
  }


class AppCar {
    constructor() {
      this.searchButton = document.getElementById("searchCarBtn");
      this.carListContainer = document.getElementById("carList");
      this.editButton = document.getElementById("editBtn");
    }
    async init() {
      await this.load();
  
      this.searchButton.onclick = () => {
        this.search();
        };

      this.editButton.onclick = () => {
        this.carListContainer.innerHTML = "";
        this.load();
        };
    }
  
    async search () {
        const cars =  await CarData.listCars(filterCars);
        CarList.init(cars);
        this.carListContainer.innerHTML = "";
        if (cars.length === 0) {
            // Tidak ada data, tampilkan pesan
            const noDataMessage = document.createElement('div');
              noDataMessage.className = "fw-bolder text-center fs-2 border border-4 border-light";
              noDataMessage.textContent = "Mobil tidak tersedia"
            this.carListContainer.appendChild(noDataMessage);
          } else {
            // Ada data, tampilkan mobil-mobilnya
            CarList.list.forEach((car) => {
              const carDataListHTML = car.render();
              const div = document.createElement('div');
              div.innerHTML = carDataListHTML;
              const carDataListElement = div.querySelector('div');
        
              if (carDataListElement) {
                this.carListContainer.appendChild(carDataListElement);
              }
            });
        }
    };
  
    async load() {
      const cars =  await CarData.listCars();
      CarList.init(cars);
      CarList.list.forEach((car) => {
        const carDataListHTML = car.render();
        const div = document.createElement('div');
        div.innerHTML = carDataListHTML;``
        const carDataListElement = div.querySelector('div');''

        if (carDataListElement) {
            this.carListContainer.appendChild(carDataListElement);
        }
      });
    }
  
    clear = () => {
      let child = this.carContainerElement.firstElementChild;
  
      while (child) {
        child.remove();
        child = this.carContainerElement.firstElementChild;
      }
    };
  }
  