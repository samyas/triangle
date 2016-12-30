import { Component, OnInit } from '@angular/core';
import { CustomValidators } from '../../shared/index';
import { ProjectsService } from '../projects.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Project } from '../model/projects.model';
import { FileSelectDirective, FileDropDirective, FileUploader } from 'ng2-file-upload/ng2-file-upload';

/**
 * This class represents the lazy loaded ProjectViewComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-project-create',
  templateUrl: 'project-create.component.html',
  styleUrls: ['project-create.component.css'],
})

export class ProjectCreateComponent implements OnInit {

  public URL: string = 'https://evening-anchorage-3159.herokuapp.com/api/';

  public project: Project = new Project('', '', '', '', '', '', '', '', '');
  public errorMessage: string;

  public categories:Array<string> = ['Amsterdam', 'Antwerp', 'Athens', 'Barcelona',
    'Berlin', 'Birmingham', 'Bradford', 'Bremen', 'Brussels', 'Bucharest',
    'Budapest', 'Cologne', 'Copenhagen', 'Dortmund', 'Dresden', 'Dublin', 'Düsseldorf',
    'Essen', 'Frankfurt', 'Genoa', 'Glasgow', 'Gothenburg', 'Hamburg', 'Hannover',
    'Helsinki', 'Leeds', 'Leipzig', 'Lisbon', 'Łódź', 'London', 'Kraków', 'Madrid',
    'Málaga', 'Manchester', 'Marseille', 'Milan', 'Munich', 'Naples', 'Palermo',
    'Paris', 'Poznań', 'Prague', 'Riga', 'Rome', 'Rotterdam', 'Seville', 'Sheffield',
    'Sofia', 'Stockholm', 'Stuttgart', 'The Hague', 'Turin', 'Valencia', 'Vienna',
    'Vilnius', 'Warsaw', 'Wrocław', 'Zagreb', 'Zaragoza'];

  public autocompleteTags: Array<string> = [];
  public autocompleteItems = [
    'Banana',
    'Orange',
    'Apple',
    'Pear',
    'Grape',
    'Potato',
    'Peach'
  ];

  public file_srcs: string[] = [];

  public uploader:FileUploader = new FileUploader({url: this.URL});
  public hasBaseDropZoneOver:boolean = false;
  public hasAnotherDropZoneOver:boolean = false;


  items = ['Pizza', 'Pasta', 'Parmesan'];

  formErrors: any = {
    'name': '',
    'email': '',
    'vat': '',
  };

  validationMessages: any = {
    'name': {
      'required': 'Name is required.',
      'minlength': 'Name must be at least 4 characters long.',
      'maxlength': 'Name cannot be more than 24 characters long.'
    },
    'email': {
      'required': 'Email is required.',
      'invalidEmailAddress': 'Email is not valid'
    },
    'vat': {
      'required': 'Vat is required.'
    }
  };

  businessTypes = ['Really Smart', 'Super Flexible', 'Weather Changer'];

  projectForm: FormGroup;

  ckeditorContent: any;


  private value: any = ['Athens'];

  private _disabledV: string = '0';

  private disabled: boolean = false;

  /**
   * Creates an instance of the ProjectListComponent with the injected
   * ProjectsService.
   *
   * @param {ProjectsService} ProjectsService - The injected ProjectsService.
   */
  constructor(public projectService: ProjectsService, private fb: FormBuilder) { }


  private get disabledV():string {
    return this._disabledV;
  }

  private set disabledV(value:string) {
    this._disabledV = value;
    this.disabled = this._disabledV === '1';
  }

  public selected(value:any):void {
    console.log('Selected value is: ', value);
  }

  public removed(value:any):void {
    console.log('Removed value is: ', value);
  }

  public refreshValue(value:any):void {
    this.value = value;
  }

  public fileOverBase(e:any):void {
    this.hasBaseDropZoneOver = e;

    console.log('sousousou:' + this.hasBaseDropZoneOver);
  }

  public fileOverAnother(e:any):void {
    this.hasAnotherDropZoneOver = e;
  }

  public displayImage(file: any) {

     // Create the file reader
    let reader = new FileReader();
     // Start reading this file
      this.readFile(file, reader, (result: any) =>{
        // After the callback fires do:
        this.file_srcs.push(result);
      });
  }


  readFile(file: any, reader: any, callback: any){
    // Set a callback funtion to fire after the file is fully loaded
    reader.onload = () => {
      // callback with the results
      callback(reader.result);
    }

    // Read the file
    reader.readAsDataURL(file);
  }



  /**
   * OnInit
   */
  ngOnInit() {
    this.buildForm();
  }

 onChange() {}
 onReady() {}
 onFocus() {}




  /**
   * Handle the projectsService observable
   */

  onSubmit() {
    this.project = this.projectForm.value;
    this.projectService.createProject(this.project)
      .subscribe(
      id => this.project.id = id,
      error => this.errorMessage = <any>error
      );
    let field = 'name';
    const messages = this.validationMessages[field];
    this.formErrors[field] += messages['maxlength'] + ' ';

  }

  buildForm(): void {
    this.projectForm = this.fb.group({
      'name': [this.project.name, [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(24)
      ]
      ],
      'email': [this.project.email, [Validators.required, CustomValidators.emailValidator]],
      'vat': [this.project.vat, Validators.required],
      'items': [this.items, Validators.required],
      'ckeditorContent' :  [this.ckeditorContent, Validators.required]
    });
    this.projectForm.valueChanges
      .subscribe(data => this.onValueChanged(data));
    this.onValueChanged(); // (re)set validation messages now
  }
  onValueChanged(data?: any) {
    if (!this.projectForm) { return; }
    const form = this.projectForm;
    for (const field in this.formErrors) {
      // clear previous error message (if any)
      this.formErrors[field] = '';
      const control = form.get(field);
      if (control && (control.dirty || control.touched) && !control.valid) {
        const messages = this.validationMessages[field];
        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + ' ';
        }
      }
    }
  }
}
