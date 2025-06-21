import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Recetasapi } from '../../../services/recetasapi';

@Component({
  selector: 'app-recetas-detalladas',
  imports: [NgOptimizedImage, CommonModule],
  templateUrl: './recetas-detalladas.html',
  styleUrl: './recetas-detalladas.css'
})
export class RecetasDetalladas implements OnInit {
  private recetasapi = inject(Recetasapi);
  private route = inject(ActivatedRoute);
  receta: any = null;

  ngOnInit(): void {
      const id = this.route.snapshot.paramMap.get('id');
      if (id) {
        this.recetasapi.getRecetaDetallada(id).subscribe((data: any) => {
          this.receta = data.meals[0];
          console.log(this.receta);
        });
      }
  }
}
