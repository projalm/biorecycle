# Generated by Django 4.0.3 on 2022-03-05 20:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0002_wallet'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='wallet',
            options={'verbose_name': 'Punto', 'verbose_name_plural': 'Puntos'},
        ),
        migrations.AddField(
            model_name='product',
            name='points',
            field=models.IntegerField(default=0),
        ),
    ]
