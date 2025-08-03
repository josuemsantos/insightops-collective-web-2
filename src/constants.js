import { 
    KubernetesIcon, OracleApexIcon, PowerBIIcon, DockerIcon, NodeJSIcon, GitHubIcon, CiCdIcon, SiebelCrmIcon, AwsIcon,
    GitLabIcon, PythonIcon, BdAnalyticsIcon, GithubIcon, LinkedinIcon, TwitterIcon
} from './assets/icons/svgIcons.jsx';

//Constants for show in the section of recent projects
export const Projects = [
  {
    id: 1,
    title: "Implementación de CI/CD con GitLab para Aplicaciones Java en Kubernetes",
    description: "Desarrollo e Implementación un pipeline CI/CD en GitLab con Docker y Kubernetes, automatizando la compilación con Maven y el despliegue en tres ambientes. Uno de los retos principales fue la gestión de dependencias, resuelto con un repositorio de Nexus privado para asegurar eficiencia.",
    author: "Marcelo Sánchez",
    imageUrl: "/images/implementacion-cicd.jpg",
    articleImageUrl: "/images/implementacion-cicd-full.jpg",
    tags: ['Docker', 'Containerd', 'Kubernetes', 'GitLab', 'CI/CD', 'Linux Red Hat', 'Rocky Linux'],
    detailedDescription: "<p>Diseñé e implementé un pipeline CI/CD usando GitLab CE en contenedores Docker, integrando tres ambientes (Factory, UAT y PRD), cada uno de los ambientes con su propio GitLab Runner y acceso al clúster Kubernetes mediante variables de entorno seguras. El pipeline nos ayudo con la automatizacion y el proceso de compilación con Maven (siempre adaptado a las preferencias del cliente), sincronización de Persisten Volum Claim (PVC) con NFS, construcción de imágenes Docker para ser almacenadas en un registry privado, Los despliegues se realizaron utilizando Secrets, ConfigMaps, y recursos persistentes (PV/PVC).</p> <br/> <p>Uno de los principales retos fue la gestión de dependencias en la fase de compilación, resuelto al unificar los artefactos a través de un repositorio Nexus privado. Además, prioricé el uso de imágenes seguras y livianas para minimizar vulnerabilidades y mejorar la eficiencia.</p>",
  },
  {
    id: 2,
    title: "Implementación de CI/CD con GitLab para Aplicaciones Java en Kubernetes",
    description: "Desarrollo e Implementación un pipeline CI/CD en GitLab con Docker y Kubernetes, automatizando la compilación con Maven y el despliegue en tres ambientes. Uno de los retos principales fue la gestión de dependencias, resuelto con un repositorio de Nexus privado para asegurar eficiencia.",
    author: "Marcelo Sánchez",
    imageUrl: "/images/implementacion-cicd.jpg",
    articleImageUrl: "/images/implementacion-cicd-full.jpg",
    tags: ['Docker', 'Containerd', 'Kubernetes', 'GitLab', 'CI/CD', 'Linux Red Hat', 'Rocky Linux'],
    detailedDescription: "<p>Diseñé e implementé un pipeline CI/CD usando GitLab CE en contenedores Docker, integrando tres ambientes (Factory, UAT y PRD), cada uno de los ambientes con su propio GitLab Runner y acceso al clúster Kubernetes mediante variables de entorno seguras. El pipeline nos ayudo con la automatizacion y el proceso de compilación con Maven (siempre adaptado a las preferencias del cliente), sincronización de Persisten Volum Claim (PVC) con NFS, construcción de imágenes Docker para ser almacenadas en un registry privado, Los despliegues se realizaron utilizando Secrets, ConfigMaps, y recursos persistentes (PV/PVC).</p> <br/> <p>Uno de los principales retos fue la gestión de dependencias en la fase de compilación, resuelto al unificar los artefactos a través de un repositorio Nexus privado. Además, prioricé el uso de imágenes seguras y livianas para minimizar vulnerabilidades y mejorar la eficiencia.</p>",
  },
  {
    id: 3,
    title: "Implementación de CI/CD con GitLab para Aplicaciones Java en Kubernetes",
    description: "Desarrollo e Implementación un pipeline CI/CD en GitLab con Docker y Kubernetes, automatizando la compilación con Maven y el despliegue en tres ambientes. Uno de los retos principales fue la gestión de dependencias, resuelto con un repositorio de Nexus privado para asegurar eficiencia.",
    author: "Marcelo Sánchez",
    imageUrl: "/images/implementacion-cicd.jpg",
    articleImageUrl: "/images/implementacion-cicd-full.jpg",
    tags: ['Docker', 'Containerd', 'Kubernetes', 'GitLab', 'CI/CD', 'Linux Red Hat', 'Rocky Linux'],
    detailedDescription: "<p>Diseñé e implementé un pipeline CI/CD usando GitLab CE en contenedores Docker, integrando tres ambientes (Factory, UAT y PRD), cada uno de los ambientes con su propio GitLab Runner y acceso al clúster Kubernetes mediante variables de entorno seguras. El pipeline nos ayudo con la automatizacion y el proceso de compilación con Maven (siempre adaptado a las preferencias del cliente), sincronización de Persisten Volum Claim (PVC) con NFS, construcción de imágenes Docker para ser almacenadas en un registry privado, Los despliegues se realizaron utilizando Secrets, ConfigMaps, y recursos persistentes (PV/PVC).</p> <br/> <p>Uno de los principales retos fue la gestión de dependencias en la fase de compilación, resuelto al unificar los artefactos a través de un repositorio Nexus privado. Además, prioricé el uso de imágenes seguras y livianas para minimizar vulnerabilidades y mejorar la eficiencia.</p>",
  }
  
];

// Constants for technologies used in the project
export const Technologies = [
    { name: 'Kubernetes', Icon: KubernetesIcon },
    { name: 'Oracle Apex', Icon: OracleApexIcon },
    { name: 'Oracle BI Publisher', Icon: PowerBIIcon },
    { name: 'Docker', Icon: DockerIcon },
    { name: 'Node.js', Icon: NodeJSIcon },
    { name: 'GitHub', Icon: GitHubIcon },
    { name: 'CI / CD', Icon: CiCdIcon },
    { name: 'Siebel CRM', Icon: SiebelCrmIcon },
    { name: 'AWS', Icon: AwsIcon },
    { name: 'GitLab', Icon: GitLabIcon },
    { name: 'Automated Python', Icon: PythonIcon },
    { name: 'BD Analytics', Icon: BdAnalyticsIcon }
];

// Constants for team members details and social media links add in the future when the team is ready
export const TEAM_MEMBERS = [
  {
    id: 1,
    name: 'Pablo Aguilar',
    role: 'Oracle Apex and BI Support',
    imageUrl: 'https://picsum.photos/seed/person1/400/400',
  },
  {
    id: 2,
    name: 'Marcelo Sánchez',
    role: 'DevOps Engineer and MDW Support',
    imageUrl: 'https://picsum.photos/seed/person2/400/400',
  },
  {
    id: 3,
    name: 'Josué Muñoz',
    role: 'CRM Support and Applications Support',
    imageUrl: 'https://picsum.photos/seed/person3/400/400',
  },
  {
    id: 4,
    name: 'Jonathan Granillo',
    role: 'DevOps Engineer and Cloud Infraestructure Support',
    imageUrl: 'https://picsum.photos/seed/person4/400/400',
  },
];

//Constants for social media links in the footer, update the URLs with real links when available
export const SOCIAL_LINKS = [
    { 
        name: 'GitHub', 
        url: 'https://github.com', 
        Icon: GithubIcon 
    },
    { 
        name: 'LinkedIn', 
        url: 'https://linkedin.com', 
        Icon: LinkedinIcon 
    },
    { 
        name: 'Twitter', 
        url: 'https://twitter.com', 
        Icon: TwitterIcon 
    },
]
