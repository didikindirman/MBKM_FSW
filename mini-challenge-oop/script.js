class BangunDatar {
    constructor() {
      if(this.constructor === BangunDatar) {
        throw new Error("This object is abstraction. Cant be initiallized");
      }
    }
    luas() {
      console.log("luas bangun datar adalah YNKTS");
    }
    keliling() {
      console.log("Keliling bangun datar adalah YNKTS");
    }
  }
  
  class Persegi extends BangunDatar {
    constructor(sisi) {
      super();
      this.sisi = sisi;
    }
   luas() {
    this.luas = this.sisi * this.sisi;
    console.log(`Luas persegi adalah sisi * sisi = ${this.luas}`);
  
    }
    keliling() {
    this.keliling = 4 * this.sisi;
    console.log(`keliling persegi adalah 4 * sisi = ${this.keliling}`);
    }
  }
  
  
  class PersegiPanjang extends BangunDatar {
  constructor(panjang, lebar) {
    super();
    this.panjang = panjang;
    this.lebar = lebar;
    }
   luas() {
     this.luas = this.panjang * this.lebar;
     console.log(`Luas persegi panjang adalah panjang * lebar = ${this.luas}`);
    }
    keliling() {
      this.keliling = 4 * (this.panjang + this.lebar);
      console.log(`Keliling persegi panjang adalah 4 * (panjang + lebar) = ${this.keliling}`);
    }
  }
  
  
  class Segitiga extends BangunDatar {
  constructor(alas, tinggi) {
    super();
    this.alas = alas;
    this.tinggi = tinggi;
    }
   luas() {
     this.luas = 0.5 * this.alas * this.tinggi;
     console.log(`Luas segitiga (sama sisi) adalah 0.5 * alas * tinggi = ${this.luas}`);
    }
    keliling() {
      this.keliling = this.alas + this.alas + this.alas ;
      console.log(`Keliling segitiga (sama sisi) adalah sisi + sisi + sisi = ${this.keliling}`);
    }
  }
  
  
  let HitungPersegi = new Persegi(5);
  HitungPersegi.luas();
  HitungPersegi.keliling();
  console.log("");
  
  let HitungPersegiPjg = new PersegiPanjang(4, 5);
  HitungPersegiPjg.luas();
  HitungPersegiPjg.keliling();
  console.log("");
  
  let HitungSegitiga = new Segitiga(2, 4);
  HitungSegitiga.luas();
  HitungSegitiga.keliling();