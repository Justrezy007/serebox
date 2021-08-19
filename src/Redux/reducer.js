import {combineReducers} from 'redux';
import {
  Cabai,
  Jagung,
  Kedelai,
  Melon,
  Padi,
  Semangka,
  Bombay,
  Edamame,
  Sawi,
  Wijen,
  KacangTanah,
  BuncisHitam,
  KurmaMajol,
  KacangHijau,
  TanamanBenih,
  TanamanSiap,
  TanamanTumbuh,
  Tomat,
  Kakao
} from '../Resources';

const initialStateBibit = {
  Benih: [
    {
      id: 1,
      nama: 'Tomat',
      gambar: Tomat,
      medanMagnetNormal: 1,
      medanMagnetExpired: 3,
      jumlahHari: 40,
      manfaat: [
        "Meningkatkan jumlah klorofil pada tanaman",
        "Memperbaiki benih yang telah expired",
        "Mempercepat masa panen"
      ],
      method: [
        {
          Step: 1,
          Status: 3,
          Waktu: 9,
          Title: 'Merendam benih dengan Air Hangat',
          Description:
            'Rendam benih di dalam air hangat selama 15 menit untuk memecah masa dormansi biji',
          isDone: false,
          isOpen: true,
        },
        {
          Step: 2,
          Status: 3,
          Waktu: 120,
          Title: 'Biarkan di udara terbuka',
          Description:
            'Tiriskan benih dari air, lalu diamkan di udara terbuka selama 2 menit',
          isDone: false,
          isOpen: false,
        },
        {
          Step: 3,
          Status: 1,
          Waktu: 468,
          Title: 'Meradiasi Benih',
          Description:
            'Masukkan benih ke dalam cawan petri pada alat untuk meradiasi biji selama 7 menit 48 detik. Setelah itu diamkan biji selama 2 hari.',
          isDone: false,
          isOpen: false,
        },
        {
          Step: 4,
          Status: 3,
          Waktu: 1,
          Title: 'Menyemai Benih',
          Description:
            'Semaikan biji ke dalam polybag dengan kedalaman 0,2-0,5 cm. Lakukan penyiraman secara berkala setiap pagi dan sore hari.',
          isDone: false,
          isOpen: false,
        },
        {
          Step: 5,
          Status: 3,
          Waktu: 1,
          Title: 'Memberikan Pupuk Pada Tanaman Tahap 1',
          Description:
            'Berikan pupuk NPK pada tanaman sebanyak 3gr setelah 10 hari masa penyemaian benih.',
          isDone: false,
          isOpen: false,
        },
        {
          Step: 6,
          Status: 3,
          Waktu: 1,
          Title: 'Memberikan Pupuk Pada Tanaman Tahap 2',
          Description:
            'Berikan pupuk NPK pada tanaman sebanyak 5gr setelah 20 hari masa penyemaian benih.',
          isDone: false,
          isOpen: false,
        },
        {
          Step: 7,
          Status: 3,
          Waktu: 1,
          Title: 'Memberikan Pupuk Pada Tanaman Tahap 3',
          Description:
            'Berikan pupuk NPK pada tanaman sebanyak 6gr setelah 30 hari masa penyemaian benih.',
          isDone: false,
          isOpen: false,
        },
        {
          Step: 8,
          Status: 3,
          Waktu: 1,
          Title: 'Memberikan Pupuk Pada Tanaman Tahap 4',
          Description:
            'Berikan pupuk NPK pada tanaman sebanyak 6gr setelah 40 hari masa penyemaian benih.',
          isDone: false,
          isOpen: false,
        },
      ],
    },
    {
      id: 2,
      nama: 'Cabai',
      gambar: Cabai,
      medanMagnetNormal: 3,
      medanMagnetExpired: 3,
      jumlahHari: 5,
      manfaat:[
        "Mempengaruhi indeks stomata pada tanaman",
        "Meningkatkan kecepatan pembentukan buah",
        "Meningkatkan jumlah buah pada tanaman"
      ],
      method: [
        {
          Step: 1,
          Status: 3,
          Waktu: 86400,
          Title: 'Merendam benih dengan Air Hangat',
          Description:
            'Rendam benih di dalam air hangat selama 15 menit untuk memecah masa dormansi biji',
          isDone: false,
          isOpen: true,
        },
        {
          Step: 2,
          Status: 3,
          Waktu: 300,
          Title: 'Biarkan di udara terbuka',
          Description:
            'Tiriskan benih dari air, lalu diamkan di udara terbuka selama 5 menit',
          isDone: false,
          isOpen: false,
        },
        {
          Step: 3,
          Status: 1,
          Waktu: 3600,
          Title: 'Meradiasi Benih',
          Description:
            'Masukkan benih ke dalam cawan petri pada alat untuk meradiasi biji selama 1 jam.',
          isDone: false,
          isOpen: false,
        },
        {
          Step: 4,
          Status: 3,
          Waktu: 1,
          Title: 'Menyemai Benih',
          Description:
            'Semaikan biji ke dalam polybag dengan kedalaman 0,2-0,5 cm. Lakukan penyiraman secara berkala setiap pagi dan sore hari.',
          isDone: false,
          isOpen: false,
        },
        {
          Step: 5,
          Status: 3,
          Waktu: 1,
          Title: 'Memberikan Pupuk Pada Tanaman Tahap 1',
          Description:
            'Berikan pupuk NPK pada tanaman sebanyak 3gr setelah 10 hari masa penyemaian benih.',
          isDone: false,
          isOpen: false,
        },
        {
          Step: 6,
          Status: 3,
          Waktu: 1,
          Title: 'Memberikan Pupuk Pada Tanaman Tahap 2',
          Description:
            'Berikan pupuk NPK pada tanaman sebanyak 5gr setelah 20 hari masa penyemaian benih.',
          isDone: false,
          isOpen: false,
        },
        {
          Step: 7,
          Status: 3,
          Waktu: 1,
          Title: 'Memberikan Pupuk Pada Tanaman Tahap 3',
          Description:
            'Berikan pupuk NPK pada tanaman sebanyak 6gr setelah 30 hari masa penyemaian benih.',
          isDone: false,
          isOpen: false,
        },
        {
          Step: 8,
          Status: 3,
          Waktu: 1,
          Title: 'Memberikan Pupuk Pada Tanaman Tahap 4',
          Description:
            'Berikan pupuk NPK pada tanaman sebanyak 6gr setelah 40 hari masa penyemaian benih.',
          isDone: false,
          isOpen: false,
        },
      ],
    },
    {
      id: 3,
      nama: 'Edamame',
      gambar: Edamame,
      medanMagnetNormal: 3,
      medanMagnetExpired: 3,
      jumlahHari: 3,
      manfaat: [
        "Meningkatkan masa pada buah saat pemanenan"
      ],
      method: [
        {
          Step: 1,
          Status: 3,
          Waktu: 10800,
          Title: 'Merendam benih dengan Air Hangat',
          Description:
            'Rendam benih di dalam air hangat selama 3 jam untuk memecah masa dormansi biji',
          isDone: false,
          isOpen: true,
        },
        {
          Step: 2,
          Status: 3,
          Waktu: 300,
          Title: 'Biarkan di udara terbuka',
          Description:
            'Tiriskan benih dari air, lalu diamkan di udara terbuka selama 5 menit',
          isDone: false,
          isOpen: false,
        },
        {
          Step: 3,
          Status: 1,
          Waktu: 7200,
          Title: 'Meradiasi Benih',
          Description:
            'Masukkan benih ke dalam cawan petri pada alat untuk meradiasi biji selama 2 jam.',
          isDone: false,
          isOpen: false,
        },
        {
          Step: 4,
          Status: 3,
          Waktu: 1,
          Title: 'Menyemai Benih',
          Description:
            'Semaikan biji ke dalam polybag dengan kedalaman 0,2-0,5 cm. Lakukan penyiraman secara berkala setiap pagi dan sore hari.',
          isDone: false,
          isOpen: false,
        },
        {
          Step: 5,
          Status: 3,
          Waktu: 1,
          Title: 'Memberikan Pupuk Pada Tanaman Tahap 1',
          Description:
            'Berikan pupuk NPK pada tanaman sebanyak 3gr setelah 10 hari masa penyemaian benih.',
          isDone: false,
          isOpen: false,
        },
        {
          Step: 6,
          Status: 3,
          Waktu: 1,
          Title: 'Memberikan Pupuk Pada Tanaman Tahap 2',
          Description:
            'Berikan pupuk NPK pada tanaman sebanyak 5gr setelah 20 hari masa penyemaian benih.',
          isDone: false,
          isOpen: false,
        },
        {
          Step: 7,
          Status: 3,
          Waktu: 1,
          Title: 'Memberikan Pupuk Pada Tanaman Tahap 3',
          Description:
            'Berikan pupuk NPK pada tanaman sebanyak 6gr setelah 30 hari masa penyemaian benih.',
          isDone: false,
          isOpen: false,
        },
        {
          Step: 8,
          Status: 3,
          Waktu: 1,
          Title: 'Memberikan Pupuk Pada Tanaman Tahap 4',
          Description:
            'Berikan pupuk NPK pada tanaman sebanyak 6gr setelah 40 hari masa penyemaian benih.',
          isDone: false,
          isOpen: false,
        },
      ],
    },
    {
      id: 4,
      nama: 'Semangka',
      gambar: Semangka,
      medanMagnetNormal: 1,
      medanMagnetExpired: 1,
      jumlahHari: 1,
      manfaat: [
        "Memberi efek percepatan waktu pematahan dormansi sehingga pertumbuhan tanaman lebih cepat",
        "Meningkatkan panjang akar pada tanaman",
        "Meningkatkan berat tanaman"
      ],
      method: [
        {
          Step: 1,
          Status: 3,
          Waktu: 900,
          Title: 'Merendam benih dengan Air Hangat',
          Description:
            'Rendam benih di dalam air hangat selama 15 menit untuk memecah masa dormansi biji',
          isDone: false,
          isOpen: true,
        },
        {
          Step: 2,
          Status: 3,
          Waktu: 120,
          Title: 'Biarkan di udara terbuka',
          Description:
            'Tiriskan benih dari air, lalu diamkan di udara terbuka selama 2 menit',
          isDone: false,
          isOpen: false,
        },
        {
          Step: 3,
          Status: 1,
          Waktu: 3600,
          Title: 'Meradiasi Benih',
          Description:
            'Masukkan benih ke dalam cawan petri pada alat untuk meradiasi biji selama 1 jam.',
          isDone: false,
          isOpen: false,
        },
        {
          Step: 4,
          Status: 3,
          Waktu: 1,
          Title: 'Menyemai Benih',
          Description:
            'Semaikan biji ke dalam polybag dengan kedalaman 0,2-0,5 cm. Lakukan penyiraman secara berkala setiap pagi dan sore hari.',
          isDone: false,
          isOpen: false,
        },
        {
          Step: 5,
          Status: 3,
          Waktu: 1,
          Title: 'Memberikan Pupuk Pada Tanaman Tahap 1',
          Description:
            'Berikan pupuk NPK pada tanaman sebanyak 3gr setelah 10 hari masa penyemaian benih.',
          isDone: false,
          isOpen: false,
        },
        {
          Step: 6,
          Status: 3,
          Waktu: 1,
          Title: 'Memberikan Pupuk Pada Tanaman Tahap 2',
          Description:
            'Berikan pupuk NPK pada tanaman sebanyak 5gr setelah 20 hari masa penyemaian benih.',
          isDone: false,
          isOpen: false,
        },
        {
          Step: 7,
          Status: 3,
          Waktu: 1,
          Title: 'Memberikan Pupuk Pada Tanaman Tahap 3',
          Description:
            'Berikan pupuk NPK pada tanaman sebanyak 6gr setelah 30 hari masa penyemaian benih.',
          isDone: false,
          isOpen: false,
        },
        {
          Step: 8,
          Status: 3,
          Waktu: 1,
          Title: 'Memberikan Pupuk Pada Tanaman Tahap 4',
          Description:
            'Berikan pupuk NPK pada tanaman sebanyak 6gr setelah 40 hari masa penyemaian benih.',
          isDone: false,
          isOpen: false,
        },
      ],
    },
    {
      id: 5,
      nama: 'Bawang Bombay',
      gambar: Bombay,
      medanMagnetNormal: 1,
      medanMagnetExpired: 1,
      jumlahHari: 12,
      method: [
        {
          Step: 1,
          Status: 3,
          Waktu: 30,
          Title: 'Merendam benih dengan Air Hangat',
          Description:
            'Rendam benih di dalam air hangat selama 30 menit untuk memecah masa dormansi biji',
          isDone: false,
          isOpen: true,
        },
        {
          Step: 2,
          Status: 3,
          Waktu: 15,
          Title: 'Tunggu Hingga Dingin',
          Description:
            'Tiriskan benih dari air, lalu diamkan di udara terbuka selama 15 menit',
          isDone: false,
          isOpen: false,
        },
        {
          Step: 3,
          Status: 1,
          Waktu: 8,
          Title: 'Meradiasi Benih',
          Description:
            'Radiasi benih menggunakan Alat selama 8 menit untuk meningkatkan kualitas biji',
          isDone: false,
          isOpen: false,
        },
      ],
    },
    {
      id: 6,
      nama: 'Kedelai',
      gambar: Kedelai,
      medanMagnetNormal: 1,
      medanMagnetExpired: 1,
      jumlahHari: 2,
      manfaat: [
        "Memberi efek percepatan waktu pematahan dormansi sehingga pertumbuhan tanaman lebih cepat",
        "Meningkatkan panjang akar pada tanaman",
        "Meningkatkan berat tanaman"
      ],
      method: [
        {
          Step: 1,
          Status: 3,
          Waktu: 900,
          Title: 'Merendam benih dengan Air Hangat',
          Description:
            'Rendam benih di dalam air hangat selama 15 menit untuk memecah masa dormansi biji',
          isDone: false,
          isOpen: true,
        },
        {
          Step: 2,
          Status: 3,
          Waktu: 120,
          Title: 'Biarkan di udara terbuka',
          Description:
            'Tiriskan benih dari air, lalu diamkan di udara terbuka selama 2 menit',
          isDone: false,
          isOpen: false,
        },
        {
          Step: 3,
          Status: 1,
          Waktu: 936,
          Title: 'Meradiasi Benih',
          Description:
            'Masukkan benih ke dalam cawan petri pada alat untuk meradiasi biji selama 15 menit 36 detik. Setelah itu masukkan ke dalam wadah dan tutup dengan kain hitam basah selama 1 hari.',
          isDone: false,
          isOpen: false,
        },
        {
          Step: 4,
          Status: 3,
          Waktu: 1,
          Title: 'Menyemai Benih',
          Description:
            'Semaikan biji ke dalam polybag dengan kedalaman 0,2-0,5 cm. Lakukan penyiraman secara berkala setiap pagi dan sore hari.',
          isDone: false,
          isOpen: false,
        },
        {
          Step: 5,
          Status: 3,
          Waktu: 1,
          Title: 'Memberikan Pupuk Pada Tanaman Tahap 1',
          Description:
            'Berikan pupuk NPK pada tanaman sebanyak 3gr setelah 10 hari masa penyemaian benih.',
          isDone: false,
          isOpen: false,
        },
        {
          Step: 6,
          Status: 3,
          Waktu: 1,
          Title: 'Memberikan Pupuk Pada Tanaman Tahap 2',
          Description:
            'Berikan pupuk NPK pada tanaman sebanyak 5gr setelah 20 hari masa penyemaian benih.',
          isDone: false,
          isOpen: false,
        },
        {
          Step: 7,
          Status: 3,
          Waktu: 1,
          Title: 'Memberikan Pupuk Pada Tanaman Tahap 3',
          Description:
            'Berikan pupuk NPK pada tanaman sebanyak 6gr setelah 30 hari masa penyemaian benih.',
          isDone: false,
          isOpen: false,
        },
        {
          Step: 8,
          Status: 3,
          Waktu: 1,
          Title: 'Memberikan Pupuk Pada Tanaman Tahap 4',
          Description:
            'Berikan pupuk NPK pada tanaman sebanyak 6gr setelah 40 hari masa penyemaian benih.',
          isDone: false,
          isOpen: false,
        },
      ],
    },
    {
      id: 7,
      nama: 'Jagung',
      gambar: Jagung,
      medanMagnetNormal: 50,
      medanMagnetExpired: 50,
      jumlahHari: 7,
      method: [
        {
          Step: 1,
          Status: 3,
          Waktu: 30,
          Title: 'Merendam benih dengan Air Hangat',
          Description:
            'Rendam benih di dalam air hangat selama 30 menit untuk memecah masa dormansi biji',
          isDone: false,
          isOpen: true,
        },
        {
          Step: 2,
          Status: 3,
          Waktu: 15,
          Title: 'Tunggu Hingga Dingin',
          Description:
            'Tiriskan benih dari air, lalu diamkan di udara terbuka selama 15 menit',
          isDone: false,
          isOpen: false,
        },
        {
          Step: 3,
          Status: 1,
          Waktu: 8,
          Title: 'Meradiasi Benih',
          Description:
            'Radiasi benih menggunakan Alat selama 8 menit untuk meningkatkan kualitas biji',
          isDone: false,
          isOpen: false,
        },
      ],
    },
    {
      id: 8,
      nama: 'Padi',
      gambar: Padi,
      medanMagnetNormal: 43,
      medanMagnetExpired: 43,
      jumlahHari: 5,
      manfaat : [
        "Meningkatkan  daya kecambah, laju perkecambahan, jumlah kecambah normal, panjang akar, dan panjang tunas"
      ],
      method: [
        {
          Step: 1,
          Status: 3,
          Waktu: 7200,
          Title: 'Merendam benih dengan Air Hangat',
          Description:
            'Rendam benih di dalam air hangat selama 2 jam untuk memecah masa dormansi biji',
          isDone: false,
          isOpen: true,
        },
        {
          Step: 2,
          Status: 3,
          Waktu: 120,
          Title: 'Biarkan di udara terbuka',
          Description:
            'Tiriskan benih dari air, lalu diamkan di udara terbuka selama 2 menit',
          isDone: false,
          isOpen: false,
        },
        {
          Step: 3,
          Status: 1,
          Waktu: 900,
          Title: 'Meradiasi Benih',
          Description:
            'Masukkan benih ke dalam cawan petri pada alat untuk meradiasi biji selama 15 menit.',
          isDone: false,
          isOpen: false,
        },
        {
          Step: 4,
          Status: 3,
          Waktu: 1,
          Title: 'Menyemai Benih',
          Description:
            'Semaikan biji ke dalam media yang berlumpur dan berair.',
          isDone: false,
          isOpen: false,
        },
      ],
    },
    {
      id: 9,
      nama: 'Sawi',
      gambar: Sawi,
      medanMagnetNormal: 6,
      medanMagnetExpired: 1,
      jumlahHari: 40,
      manfaat: [
        "Meningkatkan tinggi pada tanaman",
        "Meningkatkan jumlah daun pada tanaman",
        "Mempercepat masa panen pada tanaman",
        "Meningkatkan berat pada tanaman sawi"
      ],
      method: [
        {
          Step: 1,
          Status: 3,
          Waktu: 900,
          Title: 'Merendam Benih Dengan Air Hangat',
          Description:
            'Rendam benih di dalam air hangat selama 15 menit untuk memecah masa dormansi biji',
          isDone: false,
          isOpen: true,
        },
        {
          Step: 2,
          Status: 3,
          Waktu: 120,
          Title: 'Tunggu Hingga Dingin',
          Description:
            'Tiriskan benih dari air, lalu diamkan di udara terbuka selama 2 menit',
          isDone: false,
          isOpen: false,
        },
        {
          Step: 3,
          Status: 3,
          Waktu: 1,
          Title: 'Semai Benih Pada Media Kecil',
          Description:
            'Semai benih pada wadah dengan ukuran kecil sehingga muat diletakkan di dalam kotak pembibitan.',
          isDone: false,
          isOpen: false,
        },
        {
          Step: 4,
          Status: 1,
          Waktu: 1200,
          Title: 'Radiasi Tanaman Tahap 1',
          Description:
            'Radiasi Tanaman di dalam kotak pembibitan selama 20 menit setelah masa penyemaian tanaman 1 hari.',
          isDone: false,
          isOpen: false,
        },
        {
          Step: 5,
          Status: 1,
          Waktu: 1200,
          Title: 'Radiasi Tanaman Tahap 2',
          Description:
            'Radiasi Tanaman di dalam kotak pembibitan selama 20 menit setelah masa penyemaian tanaman 2 hari.',
          isDone: false,
          isOpen: false,
        },
        {
          Step: 6,
          Status: 1,
          Waktu: 1200,
          Title: 'Radiasi Tanaman Tahap 3',
          Description:
            'Radiasi Tanaman di dalam kotak pembibitan selama 20 menit setelah masa penyemaian tanaman 3 hari.',
          isDone: false,
          isOpen: false,
        },
        {
          Step: 7,
          Status: 1,
          Waktu: 1200,
          Title: 'Radiasi Tanaman Tahap 4',
          Description:
            'Radiasi Tanaman di dalam kotak pembibitan selama 20 menit setelah masa penyemaian tanaman 4 hari.',
          isDone: false,
          isOpen: false,
        },
        {
          Step: 8,
          Status: 1,
          Waktu: 1200,
          Title: 'Radiasi Tanaman Tahap 5',
          Description:
            'Radiasi Tanaman di dalam kotak pembibitan selama 20 menit setelah masa penyemaian tanaman 5 hari.',
          isDone: false,
          isOpen: false,
        },
        {
          Step: 9,
          Status: 3,
          Waktu: 1,
          Title: 'Memberikan Pupuk Pada Tanaman Tahap 1',
          Description:
            'Berikan pupuk NPK pada tanaman sebanyak 3gr setelah 10 hari masa penyemaian benih.',
          isDone: false,
          isOpen: false,
        },
        {
          Step: 10,
          Status: 3,
          Waktu: 1,
          Title: 'Memberikan Pupuk Pada Tanaman Tahap 2',
          Description:
            'Berikan pupuk NPK pada tanaman sebanyak 5gr setelah 20 hari masa penyemaian benih.',
          isDone: false,
          isOpen: false,
        },
        {
          Step: 11,
          Status: 3,
          Waktu: 1,
          Title: 'Memberikan Pupuk Pada Tanaman Tahap 3',
          Description:
            'Berikan pupuk NPK pada tanaman sebanyak 6gr setelah 30 hari masa penyemaian benih.',
          isDone: false,
          isOpen: false,
        },
        {
          Step: 12,
          Status: 3,
          Waktu: 1,
          Title: 'Memberikan Pupuk Pada Tanaman Tahap 4',
          Description:
            'Berikan pupuk NPK pada tanaman sebanyak 6gr setelah 40 hari masa penyemaian benih.',
          isDone: false,
          isOpen: false,
        },
      ],
    },
    {
      id: 10,
      nama: 'Wijen',
      gambar: Wijen,
      medanMagnetNormal: 3,
      medanMagnetExpired: 3,
      jumlahHari: 7,
      manfaat: [
        "Mengurangi dampak akibat terpapar jamur fusarium",
        "Mempercepat pertumbuhan tanaman",
        "Mempercepat pertumbuhan bunga pada tanaman",
        "Meningkatkan berat pada biji wijen"

      ],
      method: [
        {
          Step: 1,
          Status: 3,
          Waktu: 900,
          Title: 'Merendam Benih Dengan Air Hangat',
          Description:
            'Rendam benih di dalam air hangat selama 15 menit untuk memecah masa dormansi biji',
          isDone: false,
          isOpen: true,
        },
        {
          Step: 2,
          Status: 3,
          Waktu: 120,
          Title: 'Tunggu Hingga Dingin',
          Description:
            'Tiriskan benih dari air, lalu diamkan di udara terbuka selama 2 menit',
          isDone: false,
          isOpen: false,
        },
        {
          Step: 3,
          Status: 3,
          Waktu: 1,
          Title: 'Semai Benih Pada Media Kecil',
          Description:
            'Semai benih pada wadah dengan ukuran kecil sehingga muat diletakkan di dalam kotak pembibitan.',
          isDone: false,
          isOpen: false,
        },
        {
          Step: 4,
          Status: 1,
          Waktu: 1200,
          Title: 'Radiasi Tanaman Tahap 1',
          Description:
            'Radiasi Tanaman di dalam kotak pembibitan selama 20 menit setelah masa penyemaian tanaman 1 hari.',
          isDone: false,
          isOpen: false,
        },
        {
          Step: 5,
          Status: 1,
          Waktu: 1200,
          Title: 'Radiasi Tanaman Tahap 2',
          Description:
            'Radiasi Tanaman di dalam kotak pembibitan selama 20 menit setelah masa penyemaian tanaman 2 hari.',
          isDone: false,
          isOpen: false,
        },
        {
          Step: 6,
          Status: 1,
          Waktu: 1200,
          Title: 'Radiasi Tanaman Tahap 3',
          Description:
            'Radiasi Tanaman di dalam kotak pembibitan selama 20 menit setelah masa penyemaian tanaman 3 hari.',
          isDone: false,
          isOpen: false,
        },
        {
          Step: 7,
          Status: 1,
          Waktu: 1200,
          Title: 'Radiasi Tanaman Tahap 4',
          Description:
            'Radiasi Tanaman di dalam kotak pembibitan selama 20 menit setelah masa penyemaian tanaman 4 hari.',
          isDone: false,
          isOpen: false,
        },
        {
          Step: 8,
          Status: 1,
          Waktu: 1200,
          Title: 'Radiasi Tanaman Tahap 5',
          Description:
            'Radiasi Tanaman di dalam kotak pembibitan selama 20 menit setelah masa penyemaian tanaman 5 hari.',
          isDone: false,
          isOpen: false,
        },
        {
          Step: 9,
          Status: 3,
          Waktu: 1,
          Title: 'Memberikan Pupuk Pada Tanaman Tahap 1',
          Description:
            'Berikan pupuk NPK pada tanaman sebanyak 3gr setelah 10 hari masa penyemaian benih.',
          isDone: false,
          isOpen: false,
        },
        {
          Step: 10,
          Status: 3,
          Waktu: 1,
          Title: 'Memberikan Pupuk Pada Tanaman Tahap 2',
          Description:
            'Berikan pupuk NPK pada tanaman sebanyak 5gr setelah 20 hari masa penyemaian benih.',
          isDone: false,
          isOpen: false,
        },
        {
          Step: 11,
          Status: 3,
          Waktu: 1,
          Title: 'Memberikan Pupuk Pada Tanaman Tahap 3',
          Description:
            'Berikan pupuk NPK pada tanaman sebanyak 6gr setelah 30 hari masa penyemaian benih.',
          isDone: false,
          isOpen: false,
        },
        {
          Step: 12,
          Status: 3,
          Waktu: 1,
          Title: 'Memberikan Pupuk Pada Tanaman Tahap 4',
          Description:
            'Berikan pupuk NPK pada tanaman sebanyak 6gr setelah 40 hari masa penyemaian benih.',
          isDone: false,
          isOpen: false,
        },
      ],
    },
    {
      id: 11,
      nama: 'Kacang Merah',
      gambar: KacangTanah,
      medanMagnetNormal: 1,
      medanMagnetExpired: 1,
      jumlahHari: 7,
      manfaat: [
        "Meningkatkan  aktivitas enzim alpha-amilase"
      ],
      method: [
        {
          Step: 1,
          Status: 3,
          Waktu: 900,
          Title: 'Merendam benih dengan Air Hangat',
          Description:
            'Rendam benih di dalam air hangat selama 15 menit untuk memecah masa dormansi biji',
          isDone: false,
          isOpen: true,
        },
        {
          Step: 2,
          Status: 3,
          Waktu: 120,
          Title: 'Biarkan di udara terbuka',
          Description:
            'Tiriskan benih dari air, lalu diamkan di udara terbuka selama 2 menit',
          isDone: false,
          isOpen: false,
        },
        {
          Step: 3,
          Status: 1,
          Waktu: 936,
          Title: 'Meradiasi Benih',
          Description:
            'Masukkan benih ke dalam cawan petri pada alat untuk meradiasi biji selama 15 menit 36 detik. Setelah itu masukkan ke dalam wadah dan tutup dengan kain hitam basah selama 1 hari.',
          isDone: false,
          isOpen: false,
        },
        {
          Step: 4,
          Status: 3,
          Waktu: 1,
          Title: 'Menyemai Benih',
          Description:
            'Semaikan biji ke dalam polybag dengan kedalaman 0,2-0,5 cm. Lakukan penyiraman secara berkala setiap pagi dan sore hari.',
          isDone: false,
          isOpen: false,
        },
        {
          Step: 5,
          Status: 3,
          Waktu: 1,
          Title: 'Memberikan Pupuk Pada Tanaman Tahap 1',
          Description:
            'Berikan pupuk NPK pada tanaman sebanyak 3gr setelah 10 hari masa penyemaian benih.',
          isDone: false,
          isOpen: false,
        },
        {
          Step: 6,
          Status: 3,
          Waktu: 1,
          Title: 'Memberikan Pupuk Pada Tanaman Tahap 2',
          Description:
            'Berikan pupuk NPK pada tanaman sebanyak 5gr setelah 20 hari masa penyemaian benih.',
          isDone: false,
          isOpen: false,
        },
        {
          Step: 7,
          Status: 3,
          Waktu: 1,
          Title: 'Memberikan Pupuk Pada Tanaman Tahap 3',
          Description:
            'Berikan pupuk NPK pada tanaman sebanyak 6gr setelah 30 hari masa penyemaian benih.',
          isDone: false,
          isOpen: false,
        },
        {
          Step: 8,
          Status: 3,
          Waktu: 1,
          Title: 'Memberikan Pupuk Pada Tanaman Tahap 4',
          Description:
            'Berikan pupuk NPK pada tanaman sebanyak 6gr setelah 40 hari masa penyemaian benih.',
          isDone: false,
          isOpen: false,
        },
      ],
    },
    {
      id: 12,
      nama: 'Buncis Hitam',
      gambar: BuncisHitam,
      medanMagnetNormal: 1,
      medanMagnetExpired: 1,
      jumlahHari: 7,
      manfaat: [
        "Meningkatkan  aktivitas enzim alpha-amilase"
      ],
      method: [
        {
          Step: 1,
          Status: 3,
          Waktu: 900,
          Title: 'Merendam benih dengan Air Hangat',
          Description:
            'Rendam benih di dalam air hangat selama 15 menit untuk memecah masa dormansi biji',
          isDone: false,
          isOpen: true,
        },
        {
          Step: 2,
          Status: 3,
          Waktu: 120,
          Title: 'Biarkan di udara terbuka',
          Description:
            'Tiriskan benih dari air, lalu diamkan di udara terbuka selama 2 menit',
          isDone: false,
          isOpen: false,
        },
        {
          Step: 3,
          Status: 1,
          Waktu: 936,
          Title: 'Meradiasi Benih',
          Description:
            'Masukkan benih ke dalam cawan petri pada alat untuk meradiasi biji selama 15 menit 36 detik. Setelah itu masukkan ke dalam wadah dan tutup dengan kain hitam basah selama 1 hari.',
          isDone: false,
          isOpen: false,
        },
        {
          Step: 4,
          Status: 3,
          Waktu: 1,
          Title: 'Menyemai Benih',
          Description:
            'Semaikan biji ke dalam polybag dengan kedalaman 0,2-0,5 cm. Lakukan penyiraman secara berkala setiap pagi dan sore hari.',
          isDone: false,
          isOpen: false,
        },
        {
          Step: 5,
          Status: 3,
          Waktu: 1,
          Title: 'Memberikan Pupuk Pada Tanaman Tahap 1',
          Description:
            'Berikan pupuk NPK pada tanaman sebanyak 3gr setelah 10 hari masa penyemaian benih.',
          isDone: false,
          isOpen: false,
        },
        {
          Step: 6,
          Status: 3,
          Waktu: 1,
          Title: 'Memberikan Pupuk Pada Tanaman Tahap 2',
          Description:
            'Berikan pupuk NPK pada tanaman sebanyak 5gr setelah 20 hari masa penyemaian benih.',
          isDone: false,
          isOpen: false,
        },
        {
          Step: 7,
          Status: 3,
          Waktu: 1,
          Title: 'Memberikan Pupuk Pada Tanaman Tahap 3',
          Description:
            'Berikan pupuk NPK pada tanaman sebanyak 6gr setelah 30 hari masa penyemaian benih.',
          isDone: false,
          isOpen: false,
        },
        {
          Step: 8,
          Status: 3,
          Waktu: 1,
          Title: 'Memberikan Pupuk Pada Tanaman Tahap 4',
          Description:
            'Berikan pupuk NPK pada tanaman sebanyak 6gr setelah 40 hari masa penyemaian benih.',
          isDone: false,
          isOpen: false,
        },
      ],
    },
    {
      id: 13,
      nama: 'Kacang Hijau',
      gambar: KacangHijau,
      medanMagnetNormal: 1,
      medanMagnetExpired: 1,
      jumlahHari: 7,
      manfaat: [
        "Mempercepat perkecambahan pada kacang hijau"
      ],
      method: [
        {
          Step: 1,
          Status: 3,
          Waktu: 900,
          Title: 'Merendam benih dengan Air Hangat',
          Description:
            'Rendam benih di dalam air hangat selama 15 menit untuk memecah masa dormansi biji',
          isDone: false,
          isOpen: true,
        },
        {
          Step: 2,
          Status: 3,
          Waktu: 120,
          Title: 'Biarkan di udara terbuka',
          Description:
            'Tiriskan benih dari air, lalu diamkan di udara terbuka selama 2 menit',
          isDone: false,
          isOpen: false,
        },
        {
          Step: 3,
          Status: 1,
          Waktu: 936,
          Title: 'Meradiasi Benih',
          Description:
            'Masukkan benih ke dalam cawan petri pada alat untuk meradiasi biji selama 15 menit 36 detik. Setelah itu masukkan ke dalam wadah dan tutup dengan kain hitam basah selama 1 hari.',
          isDone: false,
          isOpen: false,
        },
        {
          Step: 4,
          Status: 3,
          Waktu: 1,
          Title: 'Menyemai Benih',
          Description:
            'Semaikan biji ke dalam polybag dengan kedalaman 0,2-0,5 cm. Lakukan penyiraman secara berkala setiap pagi dan sore hari.',
          isDone: false,
          isOpen: false,
        },
        {
          Step: 5,
          Status: 3,
          Waktu: 1,
          Title: 'Memberikan Pupuk Pada Tanaman Tahap 1',
          Description:
            'Berikan pupuk NPK pada tanaman sebanyak 3gr setelah 10 hari masa penyemaian benih.',
          isDone: false,
          isOpen: false,
        },
        {
          Step: 6,
          Status: 3,
          Waktu: 1,
          Title: 'Memberikan Pupuk Pada Tanaman Tahap 2',
          Description:
            'Berikan pupuk NPK pada tanaman sebanyak 5gr setelah 20 hari masa penyemaian benih.',
          isDone: false,
          isOpen: false,
        },
        {
          Step: 7,
          Status: 3,
          Waktu: 1,
          Title: 'Memberikan Pupuk Pada Tanaman Tahap 3',
          Description:
            'Berikan pupuk NPK pada tanaman sebanyak 6gr setelah 30 hari masa penyemaian benih.',
          isDone: false,
          isOpen: false,
        },
        {
          Step: 8,
          Status: 3,
          Waktu: 1,
          Title: 'Memberikan Pupuk Pada Tanaman Tahap 4',
          Description:
            'Berikan pupuk NPK pada tanaman sebanyak 6gr setelah 40 hari masa penyemaian benih.',
          isDone: false,
          isOpen: false,
        },
      ],
    },
    {
      id: 14,
      nama: 'Kurma Majol',
      gambar: KurmaMajol,
      medanMagnetNormal: 10,
      medanMagnetExpired: 10,
      jumlahHari: 7,
      manfaat: [
        "Mempercepat perkecambahan pada kurma",
        "Mempercepat pertumbuhan pada tanaman kurma",

      ],
      method: [
        {
          Step: 1,
          Status: 3,
          Waktu: 900,
          Title: 'Merendam Benih Dengan Air Hangat',
          Description:
            'Rendam benih di dalam air hangat selama 15 menit untuk memecah masa dormansi biji. Lalu diamkan selama 2 hari',
          isDone: false,
          isOpen: true,
        },
        {
          Step: 2,
          Status: 3,
          Waktu: 300,
          Title: 'Tiriskan dan cuci benih',
          Description:
            'Tiriskan benih dari air, lalu diamkan di udara terbuka selama 5 menit',
          isDone: false,
          isOpen: false,
        },
        {
          Step: 3,
          Status: 3,
          Waktu: 1,
          Title: 'Semai Benih Pada Media Kecil',
          Description:
            'Semai benih pada wadah yang telah diisi kapas sebagai media dengan ukuran kecil sehingga muat diletakkan di dalam kotak pembibitan.',
          isDone: false,
          isOpen: false,
        },
        {
          Step: 4,
          Status: 1,
          Waktu: 900,
          Title: 'Radiasi Tanaman Tahap 1',
          Description:
            'Radiasi Tanaman di dalam kotak pembibitan selama 15 menit setelah masa penyemaian tanaman 1 hari.',
          isDone: false,
          isOpen: false,
        },
        {
          Step: 5,
          Status: 1,
          Waktu: 900,
          Title: 'Radiasi Tanaman Tahap 2',
          Description:
            'Radiasi Tanaman di dalam kotak pembibitan selama 15 menit setelah masa penyemaian tanaman 2 hari.',
          isDone: false,
          isOpen: false,
        },
        {
          Step: 6,
          Status: 1,
          Waktu: 900,
          Title: 'Radiasi Tanaman Tahap 3',
          Description:
            'Radiasi Tanaman di dalam kotak pembibitan selama 15 menit setelah masa penyemaian tanaman 3 hari.',
          isDone: false,
          isOpen: false,
        },
        {
          Step: 7,
          Status: 3,
          Waktu: 1,
          Title: 'Memberikan Pupuk Pada Tanaman Tahap 1',
          Description:
            'Berikan pupuk NPK pada tanaman sebanyak 3gr setelah 10 hari masa penyemaian benih.',
          isDone: false,
          isOpen: false,
        },
        {
          Step: 8,
          Status: 3,
          Waktu: 1,
          Title: 'Memberikan Pupuk Pada Tanaman Tahap 2',
          Description:
            'Berikan pupuk NPK pada tanaman sebanyak 5gr setelah 20 hari masa penyemaian benih.',
          isDone: false,
          isOpen: false,
        },
        {
          Step: 9,
          Status: 3,
          Waktu: 1,
          Title: 'Memberikan Pupuk Pada Tanaman Tahap 3',
          Description:
            'Berikan pupuk NPK pada tanaman sebanyak 6gr setelah 30 hari masa penyemaian benih.',
          isDone: false,
          isOpen: false,
        },
        {
          Step: 10,
          Status: 3,
          Waktu: 1,
          Title: 'Memberikan Pupuk Pada Tanaman Tahap 4',
          Description:
            'Berikan pupuk NPK pada tanaman sebanyak 6gr setelah 40 hari masa penyemaian benih.',
          isDone: false,
          isOpen: false,
        },
      ],
    },
    {
      id: 15,
      nama: 'Kakao',
      gambar: Kakao,
      medanMagnetNormal: 5,
      medanMagnetExpired: 5,
      jumlahHari: 7,
      method: [
        {
          Step: 1,
          Status: 3,
          Waktu: 1800,
          Title: 'Merendam benih dengan Air Kapur',
          Description:
            'Rendam benih di dalam air kapur selama 30 menit.',
          isDone: false,
          isOpen: true,
        },
        {
          Step: 2,
          Status: 3,
          Waktu: 120,
          Title: 'Biarkan di udara terbuka',
          Description:
            'Tiriskan benih dari air, lalu diamkan di udara terbuka selama 2 menit',
          isDone: false,
          isOpen: false,
        },
        {
          Step: 3,
          Status: 1,
          Waktu: 1800,
          Title: 'Meradiasi Benih',
          Description:
            'Masukkan benih ke dalam cawan petri pada alat untuk meradiasi biji selama 30 menit.',
          isDone: false,
          isOpen: false,
        },
        {
          Step: 4,
          Status: 3,
          Waktu: 1,
          Title: 'Menyemai Benih',
          Description:
            'Semaikan biji ke dalam polybag dengan kedalaman 0,2-0,5 cm. Lakukan penyiraman secara berkala setiap pagi dan sore hari.',
          isDone: false,
          isOpen: false,
        },
        {
          Step: 5,
          Status: 3,
          Waktu: 1,
          Title: 'Memberikan Pupuk Pada Tanaman Tahap 1',
          Description:
            'Berikan pupuk NPK pada tanaman sebanyak 3gr setelah 10 hari masa penyemaian benih.',
          isDone: false,
          isOpen: false,
        },
        {
          Step: 6,
          Status: 3,
          Waktu: 1,
          Title: 'Memberikan Pupuk Pada Tanaman Tahap 2',
          Description:
            'Berikan pupuk NPK pada tanaman sebanyak 5gr setelah 20 hari masa penyemaian benih.',
          isDone: false,
          isOpen: false,
        },
        {
          Step: 7,
          Status: 3,
          Waktu: 1,
          Title: 'Memberikan Pupuk Pada Tanaman Tahap 3',
          Description:
            'Berikan pupuk NPK pada tanaman sebanyak 6gr setelah 30 hari masa penyemaian benih.',
          isDone: false,
          isOpen: false,
        },
        {
          Step: 8,
          Status: 3,
          Waktu: 1,
          Title: 'Memberikan Pupuk Pada Tanaman Tahap 4',
          Description:
            'Berikan pupuk NPK pada tanaman sebanyak 6gr setelah 40 hari masa penyemaian benih.',
          isDone: false,
          isOpen: false,
        },
      ],
    },
  ],
};

const initialStateTanaman = {
  Tanaman: [
    {
      id: 1,
      nama: 'Tomat',
      gambar: Tomat,
      kondisi: 'Expired',
      totalHari: 12,
      updateHari: 2,
      jumlah: 30,
      medan: 0.1,
      method: [
        {
          Step: 1,
          Status: 3,
          Waktu: 5,
          Title: 'Merendam benih dengan Air Hangat',
          Description:
            'Rendam benih di dalam air hangat selama 30 menit untuk memecah masa dormansi biji',
          isDone: false,
          isOpen: true,
        },
        {
          Step: 2,
          Status: 3,
          Waktu: 15,
          Title: 'Tunggu Hingga Dingin',
          Description:
            'Tiriskan benih dari air, lalu diamkan di udara terbuka selama 15 menit',
          isDone: false,
          isOpen: false,
        },
        {
          Step: 3,
          Status: 1,
          Waktu: 8,
          Title: 'Meradiasi Benih',
          Description:
            'Radiasi benih menggunakan Alat selama 8 menit untuk meningkatkan kualitas biji',
          isDone: false,
          isOpen: false,
        },
      ],
    },
    {
      id: 2,
      nama: 'Cabai',
      gambar: Cabai,
      kondisi: 'Baru',
      totalHari: 6,
      updateHari: 1,
      jumlah: 15,
      medan: 0.1,
      method: [
        {
          Step: 1,
          Status: 3,
          Waktu: 30,
          Title: 'Merendam benih dengan Air Hangat',
          Description:
            'Rendam benih di dalam air hangat selama 30 menit untuk memecah masa dormansi biji',
          isDone: false,
          isOpen: true,
        },
        {
          Step: 2,
          Status: 3,
          Waktu: 15,
          Title: 'Tunggu Hingga Dingin',
          Description:
            'Tiriskan benih dari air, lalu diamkan di udara terbuka selama 15 menit',
          isDone: false,
          isOpen: false,
        },
        {
          Step: 3,
          Status: 1,
          Waktu: 8,
          Title: 'Meradiasi Benih',
          Description:
            'Radiasi benih menggunakan Alat selama 8 menit untuk meningkatkan kualitas biji',
          isDone: false,
          isOpen: false,
        },
      ],
    },
    {
      id: 3,
      nama: 'Melon',
      gambar: Melon,
      kondisi: 'Baru',
      totalHari: 5,
      updateHari: 3,
      jumlah: 20,
      medan: 0.1,
      method: [
        {
          Step: 1,
          Status: 3,
          Waktu: 30,
          Title: 'Merendam benih dengan Air Hangat',
          Description:
            'Rendam benih di dalam air hangat selama 30 menit untuk memecah masa dormansi biji',
          isDone: false,
          isOpen: true,
        },
        {
          Step: 2,
          Status: 3,
          Waktu: 15,
          Title: 'Tunggu Hingga Dingin',
          Description:
            'Tiriskan benih dari air, lalu diamkan di udara terbuka selama 15 menit',
          isDone: false,
          isOpen: false,
        },
        {
          Step: 3,
          Status: 1,
          Waktu: 8,
          Title: 'Meradiasi Benih',
          Description:
            'Radiasi benih menggunakan Alat selama 8 menit untuk meningkatkan kualitas biji',
          isDone: false,
          isOpen: false,
        },
      ],
    },
    {
      id: 4,
      nama: 'Semangka',
      gambar: Semangka,
      kondisi: 'Expired',
      totalHari: 10,
      updateHari: 7,
      jumlah: 60,
      medan: 0.1,
      method: [
        {
          Step: 1,
          Status: 3,
          Waktu: 30,
          Title: 'Merendam benih dengan Air Hangat',
          Description:
            'Rendam benih di dalam air hangat selama 30 menit untuk memecah masa dormansi biji',
          isDone: false,
          isOpen: true,
        },
        {
          Step: 2,
          Status: 3,
          Waktu: 15,
          Title: 'Tunggu Hingga Dingin',
          Description:
            'Tiriskan benih dari air, lalu diamkan di udara terbuka selama 15 menit',
          isDone: false,
          isOpen: false,
        },
        {
          Step: 3,
          Status: 1,
          Waktu: 8,
          Title: 'Meradiasi Benih',
          Description:
            'Radiasi benih menggunakan Alat selama 8 menit untuk meningkatkan kualitas biji',
          isDone: false,
          isOpen: false,
        },
      ],
    },
  ],
};

const BibitReducer = (state = initialStateBibit, action) => {
  return state;
};

const TanamanReducer = (state = initialStateTanaman, action) => {
  if (action.type === 'SET_FORM') {
    return {
      ...state,
      Tanaman: [
        ...state.Tanaman,
        {
          id: state.Tanaman.length + 1,
          nama: action.inputNama,
          gambar: action.inputGambar,
          kondisi: action.inputKondisi,
          totalHari: action.inputJumlahHari,
          updateHari: 0,
          jumlah: action.inputBenih,
          medan: action.inputMedan,
          method: action.inputMethod,
        },
      ],
    };
  }
  return state;
};

const reducer = combineReducers({
  BibitReducer,
  TanamanReducer,
});
export default reducer;
