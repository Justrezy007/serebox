import {combineReducers} from 'redux';
import {
  BawangMerah,
  Cabai,
  Jagung,
  Kedelai,
  Melon,
  Padi,
  Semangka,
  TanamanBenih,
  TanamanSiap,
  TanamanTumbuh,
  Timun,
  Tomat,
} from '../Resources';

const initialStateBibit = {
  Benih: [
    {
      id: 1,
      nama: 'Tomat',
      gambar: Tomat,
      medanMagnetNormal: 2,
      medanMagnetExpired: 1,
      jumlahHari: 8,
      method: [
        {
          Step: 1,
          Waktu: 30,
          Title: 'Merendam benih dengan Air Hangat',
          Description:
            'Rendam benih di dalam air hangat selama 30 menit untuk memecah masa dormansi biji',
          isDone: false,
          isOpen: true,
        },
        {
          Step: 2,
          Waktu: 15,
          Title: 'Tunggu Hingga Dingin',
          Description:
            'Tiriskan benih dari air, lalu diamkan di udara terbuka selama 15 menit',
          isDone: false,
          isOpen: false,
        },
        {
          Step: 3,
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
      medanMagnetNormal: 2,
      medanMagnetExpired: 1,
      jumlahHari: 5,
      method: [
        {
          Step: 1,
          Waktu: 30,
          Title: 'Merendam benih dengan Air Hangat',
          Description:
            'Rendam benih di dalam air hangat selama 30 menit untuk memecah masa dormansi biji',
          isDone: false,
          isOpen: true,
        },
        {
          Step: 2,
          Waktu: 15,
          Title: 'Tunggu Hingga Dingin',
          Description:
            'Tiriskan benih dari air, lalu diamkan di udara terbuka selama 15 menit',
          isDone: false,
          isOpen: false,
        },
        {
          Step: 3,
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
      medanMagnetNormal: 2,
      medanMagnetExpired: 1,
      jumlahHari: 3,
      method: [
        {
          Step: 1,
          Waktu: 30,
          Title: 'Merendam benih dengan Air Hangat',
          Description:
            'Rendam benih di dalam air hangat selama 30 menit untuk memecah masa dormansi biji',
          isDone: false,
          isOpen: true,
        },
        {
          Step: 2,
          Waktu: 15,
          Title: 'Tunggu Hingga Dingin',
          Description:
            'Tiriskan benih dari air, lalu diamkan di udara terbuka selama 15 menit',
          isDone: false,
          isOpen: false,
        },
        {
          Step: 3,
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
      medanMagnetNormal: 2,
      medanMagnetExpired: 1,
      jumlahHari: 1,
      method: [
        {
          Step: 1,
          Waktu: 30,
          Title: 'Merendam benih dengan Air Hangat',
          Description:
            'Rendam benih di dalam air hangat selama 30 menit untuk memecah masa dormansi biji',
          isDone: false,
          isOpen: true,
        },
        {
          Step: 2,
          Waktu: 15,
          Title: 'Tunggu Hingga Dingin',
          Description:
            'Tiriskan benih dari air, lalu diamkan di udara terbuka selama 15 menit',
          isDone: false,
          isOpen: false,
        },
        {
          Step: 3,
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
      nama: 'Bawang Merah',
      gambar: BawangMerah,
      medanMagnetNormal: 2,
      medanMagnetExpired: 1,
      jumlahHari: 12,
      method: [
        {
          Step: 1,
          Waktu: 30,
          Title: 'Merendam benih dengan Air Hangat',
          Description:
            'Rendam benih di dalam air hangat selama 30 menit untuk memecah masa dormansi biji',
          isDone: false,
          isOpen: true,
        },
        {
          Step: 2,
          Waktu: 15,
          Title: 'Tunggu Hingga Dingin',
          Description:
            'Tiriskan benih dari air, lalu diamkan di udara terbuka selama 15 menit',
          isDone: false,
          isOpen: false,
        },
        {
          Step: 3,
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
      medanMagnetNormal: 2,
      medanMagnetExpired: 1,
      jumlahHari: 2,
      method: [
        {
          Step: 1,
          Waktu: 30,
          Title: 'Merendam benih dengan Air Hangat',
          Description:
            'Rendam benih di dalam air hangat selama 30 menit untuk memecah masa dormansi biji',
          isDone: false,
          isOpen: true,
        },
        {
          Step: 2,
          Waktu: 15,
          Title: 'Tunggu Hingga Dingin',
          Description:
            'Tiriskan benih dari air, lalu diamkan di udara terbuka selama 15 menit',
          isDone: false,
          isOpen: false,
        },
        {
          Step: 3,
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
      medanMagnetNormal: 2,
      medanMagnetExpired: 1,
      jumlahHari: 7,
      method: [
        {
          Step: 1,
          Waktu: 30,
          Title: 'Merendam benih dengan Air Hangat',
          Description:
            'Rendam benih di dalam air hangat selama 30 menit untuk memecah masa dormansi biji',
          isDone: false,
          isOpen: true,
        },
        {
          Step: 2,
          Waktu: 15,
          Title: 'Tunggu Hingga Dingin',
          Description:
            'Tiriskan benih dari air, lalu diamkan di udara terbuka selama 15 menit',
          isDone: false,
          isOpen: false,
        },
        {
          Step: 3,
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
      medanMagnetNormal: 2,
      medanMagnetExpired: 1,
      jumlahHari: 5,
      method: [
        {
          Step: 1,
          Waktu: 30,
          Title: 'Merendam benih dengan Air Hangat',
          Description:
            'Rendam benih di dalam air hangat selama 30 menit untuk memecah masa dormansi biji',
          isDone: false,
          isOpen: true,
        },
        {
          Step: 2,
          Waktu: 15,
          Title: 'Tunggu Hingga Dingin',
          Description:
            'Tiriskan benih dari air, lalu diamkan di udara terbuka selama 15 menit',
          isDone: false,
          isOpen: false,
        },
        {
          Step: 3,
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
      nama: 'Timun',
      gambar: Timun,
      medanMagnetNormal: 2,
      medanMagnetExpired: 1,
      jumlahHari: 7,
      method: [
        {
          Step: 1,
          Waktu: 30,
          Title: 'Merendam benih dengan Air Hangat',
          Description:
            'Rendam benih di dalam air hangat selama 30 menit untuk memecah masa dormansi biji',
          isDone: false,
          isOpen: true,
        },
        {
          Step: 2,
          Waktu: 15,
          Title: 'Tunggu Hingga Dingin',
          Description:
            'Tiriskan benih dari air, lalu diamkan di udara terbuka selama 15 menit',
          isDone: false,
          isOpen: false,
        },
        {
          Step: 3,
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
          Waktu: 30,
          Title: 'Merendam benih dengan Air Hangat',
          Description:
            'Rendam benih di dalam air hangat selama 30 menit untuk memecah masa dormansi biji',
          isDone: false,
          isOpen: true,
        },
        {
          Step: 2,
          Waktu: 15,
          Title: 'Tunggu Hingga Dingin',
          Description:
            'Tiriskan benih dari air, lalu diamkan di udara terbuka selama 15 menit',
          isDone: false,
          isOpen: false,
        },
        {
          Step: 3,
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
          Waktu: 30,
          Title: 'Merendam benih dengan Air Hangat',
          Description:
            'Rendam benih di dalam air hangat selama 30 menit untuk memecah masa dormansi biji',
          isDone: false,
          isOpen: true,
        },
        {
          Step: 2,
          Waktu: 15,
          Title: 'Tunggu Hingga Dingin',
          Description:
            'Tiriskan benih dari air, lalu diamkan di udara terbuka selama 15 menit',
          isDone: false,
          isOpen: false,
        },
        {
          Step: 3,
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
          Waktu: 30,
          Title: 'Merendam benih dengan Air Hangat',
          Description:
            'Rendam benih di dalam air hangat selama 30 menit untuk memecah masa dormansi biji',
          isDone: false,
          isOpen: true,
        },
        {
          Step: 2,
          Waktu: 15,
          Title: 'Tunggu Hingga Dingin',
          Description:
            'Tiriskan benih dari air, lalu diamkan di udara terbuka selama 15 menit',
          isDone: false,
          isOpen: false,
        },
        {
          Step: 3,
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
          Waktu: 30,
          Title: 'Merendam benih dengan Air Hangat',
          Description:
            'Rendam benih di dalam air hangat selama 30 menit untuk memecah masa dormansi biji',
          isDone: false,
          isOpen: true,
        },
        {
          Step: 2,
          Waktu: 15,
          Title: 'Tunggu Hingga Dingin',
          Description:
            'Tiriskan benih dari air, lalu diamkan di udara terbuka selama 15 menit',
          isDone: false,
          isOpen: false,
        },
        {
          Step: 3,
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
