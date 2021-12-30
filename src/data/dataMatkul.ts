export type DataMatkul = {
  sem: string;
  kode: string;
  nama: string;
  mkjur: string;
};

const dataMatkul: DataMatkul[] = [
  { kode: 'EC4802', mkjur: '29100', nama: 'Kompetensi Teknologi Elektro', sem: '8' },
  { kode: 'EC4603', mkjur: '29100', nama: 'Sistem Tertanam dan lab', sem: '6' },
  { kode: 'EC4602', mkjur: '29100', nama: 'Pemrograman Sistem dan Jaringan', sem: '6' },
];

export default dataMatkul;
