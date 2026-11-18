interface Project {
  name: string;
  field: string;
  problem: string;
  contribution: string;
  technologies: string[];
  repository?: string;
}

const projects: Project[] = [
  projects: [
    {
      name: 'AuthCore',
      field: 'Kimlik doğrulama',
      problem: 'Bir API, isteği gönderen kullanıcının kimliğini doğrulamak ve erişimi denetlemek zorunda.',
      contribution: 'Node.js ve Express ile kimlik doğrulama ve API ara yazılımları üzerine çalıştım.',
      technologies: ['Node.js', 'Express'],
      repository: 'https://github.com/mkbursa1963/AuthCore',
    },
    {
      name: 'KalkanPrivate',
      field: 'Yerel dosya ve kod analizi',
      problem: 'Dosya imzalarını ve kaynak kodun yapısını yerel ortamda incelemek için bir analiz aracına ihtiyaç vardı.',
      contribution: 'Python ile geliştirdiğim araçta dosya imzası kontrolü, soyut sözdizimi ağacı (AST) tabanlı kod analizi ve Ollama entegrasyonu üzerinde çalıştım.',
      technologies: ['Python', 'AST', 'Ollama'],
    },
    {
      name: 'KöyHasadım',
      field: 'Yerel üretici pazaryeri',
      problem: 'Yerel üreticilerin ürünlerini sunabileceği bir pazaryerinde ürün ve satıcı bilgilerinin yönetilmesi gerekiyor.',
      contribution: 'Next.js, MongoDB ve Nginx kullanılan pazaryeri projesinde yer aldım. Proje, ürün ve satıcı yönetimini aynı platformda ele alıyor.',
      technologies: ['Next.js', 'MongoDB', 'Nginx'],
    },
    {
      name: 'StrideOn',
      field: 'Mobil fitness uygulaması',
      problem: 'Antrenman ve topluluk özelliklerini tek bir mobil uygulamada bir araya getirmek.',
      contribution: 'Expo ile geliştirilen mobil uygulamayı ve Node.js ile MongoDB kullanan API’yi kapsayan projede yer aldım.',
      technologies: ['Expo', 'Node.js', 'MongoDB'],
    },
];

export const portfolio = {
  projects,
  contact: {
    github: 'https://github.com/mkbursa1963',
    linkedin: '',
    email: '',
    cv: '',
  },
  skills: [
    { category: 'Backend', technologies: ['Node.js', 'Express', 'Python', 'API geliştirme'] },
    { category: 'Veri ve Altyapı', technologies: ['MongoDB', 'Nginx'] },
    { category: 'Güvenlik', technologies: ['Kimlik doğrulama', 'Dosya imzası kontrolü', 'AST tabanlı kod analizi'] },
  ],
};
