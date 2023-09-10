import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FakeApiService {
  conutry: Array<any> = [
    {
      name: 'البحرين',
      id: 1,
      from: 'قطر',
      to: 'السعودية',
      contant: `الصفحة التي يقرأها. ولذلك يتم استخدام طريقة لوريم إيبسوم لأنها تعطي توزيعاَ طبيعياَ عطي توزيعاَ طبيعياَ -إلى
  حد
  ما- للأحرف عوضاً عن استخدام "هنا يوجد محتوى نصي، هنا يوجد محتوى نصي" فتجعلها تبدو (أي الأحرف) وكأنها نص مقروء
  الصفحة التي يقرأها. ولذلك يتم استخدام طريقة لوريم إيبسوم لأنها تعطي توزيعاَ طبيعياَ`,
      numberOfDoucment: 2547812,
      date: '25/7/2023',
      typeOfborder: 'حدود بحريه',
      source: 'الامم المتحده',
      numOfInout: 154235146412,
      link: 'https://www.flaticon.com/free-icon/copy_9411848?term=copy&page=1&position=2&origin=search&related_id=9411848',
      importt: 'صادر',
      workNum: 168974523,
      security: 'سرية',
      pity: 'عاجل',
      side: 'الأمم المتحدة',
      attatchment: 24,
      moreAttach: 'خريطة الحدود الدولية بين قطر والسعودية وقرص صلب',
      savePlace: 'في أرشيف وثائق المركز',
      fileCode: 'CODE16548795',
    },
  ];

  Douc: Array<any> = [
    {
      firstName: 'اسم الوثيقه الفرعيه الاولي',
      number: 125436,
      size: 'حجم الملف: 15 م.ب',
      type: 'ملف ورد (DOC)',
    },
    {
      firstName: 'اسم الوثيقه الفرعيه الاولي',
      number: 125436,
      size: 'حجم الملف: 15 م.ب',
      type: 'ملف ورد (DOC)',
    },
    {
      firstName: 'اسم الوثيقه الفرعيه الاولي',
      number: 125436,
      size: 'حجم الملف: 15 م.ب',
      type: 'ملف ورد (DOC)',
    },
    {
      firstName: 'اسم الوثيقه الفرعيه الاولي',
      number: 125436,
      size: 'حجم الملف: 15 م.ب',
      type: 'ملف ورد (DOC)',
    },
    {
      firstName: 'اسم الوثيقه الفرعيه الاولي',
      number: 125436,
      size: 'حجم الملف: 15 م.ب',
      type: 'ملف ورد (DOC)',
    },
  ];
  constructor() {}
}
