import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { trigger, transition, style, animate } from '@angular/animations';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0, height: 0 }),
        animate('300ms ease-out', style({ opacity: 1, height: '*' }))
      ]),
      transition(':leave', [
        animate('300ms ease-in', style({ opacity: 0, height: 0 }))
      ])
    ])
  ]
})
export class LandingComponent implements OnInit {
  isMenuOpen = false;
  contactForm: FormGroup;

  services = [
    { icon: 'code', title: 'Custom Software Development', description: 'Tailored solutions to meet your specific business needs and challenges.' },
    { icon: 'globe', title: 'Web Application Development', description: 'Responsive and scalable web applications using cutting-edge technologies.' },
    { icon: 'server', title: 'Enterprise Architecture', description: 'Design and implement robust, scalable architectures for large-scale systems.' },
    { icon: 'database', title: 'Database Design & Optimization', description: 'Efficient database solutions for improved performance and data management.' },
    { icon: 'zap', title: 'Performance Optimization', description: 'Enhance the speed and efficiency of your existing applications.' },
    { icon: 'layout', title: 'UI/UX Design', description: 'Create intuitive and visually appealing user interfaces for your applications.' }
  ];

  skills = [
    'Angular', 'JavaScript', 'Python', 'Java', 'React', 'Node.js', 'Google Cloud', 'Firebase',
    'Docker', 'GraphQL', 'MongoDB', 'MySQL', 'CI/CD', 'Agile'
  ];

  pricingPlans = [
    {
      title: 'Basic',
      price: '$1,000',
      description: 'Perfect for small projects and startups',
      features: [
        'Custom software development',
        'Basic web application or solution',
        '1 month of support',
        '1 revision'
      ],
      highlighted: false
    },
    {
      title: 'Pro',
      price: '$5,000',
      description: 'Ideal for growing businesses',
      features: [
        'Advanced software development',
        'Complex web application or solution',
        'Database design & optimization',
        '3 months of support',
        '3 revisions'
      ],
      highlighted: true
    },
    {
      title: 'Enterprise',
      price: 'Custom',
      description: 'Tailored solutions for large organizations',
      features: [
        'Enterprise architecture',
        'Scalable system design',
        'Performance optimization',
        'Dedicated support',
        'Unlimited revisions'
      ],
      highlighted: false
    }
  ];

  testimonials = [
    {
      quote: "Working with this team was a game-changer for our business. They delivered a solution that exceeded our expectations.",
      author: "John Doe",
      company: "Tech Innovators Inc."
    },
    {
      quote: "The level of expertise and professionalism is unmatched. Our project was completed on time and within budget.",
      author: "Jane Smith",
      company: "Global Enterprises Ltd."
    },
    {
      quote: "I'm impressed by the innovative approach and attention to detail. The solution provided has significantly improved our operations.",
      author: "Mike Johnson",
      company: "StartUp Ventures"
    }
  ];

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  ngOnInit() {}

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log('Form submitted:', this.contactForm.value);
      this.contactForm.reset();
    }
  }

  scrollToSection(section: string){
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}