import {combineReducers} from 'redux';
import {
  BawangMerah,
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
  Timun,
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
      jumlahHari: 8,
      method: [
        {
          Step: 1,
          Status: 3,
          Waktu: 1,
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
      medanMagnetNormal: 3,
      medanMagnetExpired: 3,
      jumlahHari: 5,
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
      nama: 'Edamame',
      gambar: Edamame,
      medanMagnetNormal: 3,
      medanMagnetExpired: 3,
      jumlahHari: 3,
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
      medanMagnetNormal: 1,
      medanMagnetExpired: 1,
      jumlahHari: 1,
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
      medanMagnetNormal: 29,
      medanMagnetExpired: 46,
      jumlahHari: 2,
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
      id: 9,
      nama: 'Sawi',
      gambar: Sawi,
      medanMagnetNormal: 6,
      medanMagnetExpired: 1,
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
      id: 10,
      nama: 'Wijen',
      gambar: Wijen,
      medanMagnetNormal: 3,
      medanMagnetExpired: 3,
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
      id: 11,
      nama: 'Kacang Tanah',
      gambar: KacangTanah,
      medanMagnetNormal: 1,
      medanMagnetExpired: 1,
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
      id: 12,
      nama: 'Buncis Hitam',
      gambar: BuncisHitam,
      medanMagnetNormal: 1,
      medanMagnetExpired: 1,
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
      id: 13,
      nama: 'Kacang Hijau',
      gambar: KacangHijau,
      medanMagnetNormal: 1,
      medanMagnetExpired: 1,
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
      id: 14,
      nama: 'Kurma Majol',
      gambar: KurmaMajol,
      medanMagnetNormal: 10,
      medanMagnetExpired: 10,
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
