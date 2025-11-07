var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_03_PERAIRANPERAIRAN_AR_1 = new ol.format.GeoJSON();
var features_03_PERAIRANPERAIRAN_AR_1 = format_03_PERAIRANPERAIRAN_AR_1.readFeatures(json_03_PERAIRANPERAIRAN_AR_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_03_PERAIRANPERAIRAN_AR_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_03_PERAIRANPERAIRAN_AR_1.addFeatures(features_03_PERAIRANPERAIRAN_AR_1);
var lyr_03_PERAIRANPERAIRAN_AR_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_03_PERAIRANPERAIRAN_AR_1, 
                style: style_03_PERAIRANPERAIRAN_AR_1,
                popuplayertitle: '03_PERAIRAN — PERAIRAN_AR',
                interactive: true,
                title: '<img src="styles/legend/03_PERAIRANPERAIRAN_AR_1.png" /> 03_PERAIRAN — PERAIRAN_AR'
            });
var format_03_PERAIRANPERAIRANLAINNYA_AR_2 = new ol.format.GeoJSON();
var features_03_PERAIRANPERAIRANLAINNYA_AR_2 = format_03_PERAIRANPERAIRANLAINNYA_AR_2.readFeatures(json_03_PERAIRANPERAIRANLAINNYA_AR_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_03_PERAIRANPERAIRANLAINNYA_AR_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_03_PERAIRANPERAIRANLAINNYA_AR_2.addFeatures(features_03_PERAIRANPERAIRANLAINNYA_AR_2);
var lyr_03_PERAIRANPERAIRANLAINNYA_AR_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_03_PERAIRANPERAIRANLAINNYA_AR_2, 
                style: style_03_PERAIRANPERAIRANLAINNYA_AR_2,
                popuplayertitle: '03_PERAIRAN — PERAIRANLAINNYA_AR',
                interactive: true,
                title: '<img src="styles/legend/03_PERAIRANPERAIRANLAINNYA_AR_2.png" /> 03_PERAIRAN — PERAIRANLAINNYA_AR'
            });
var format_06_TUTUPAN_LAHANPENUTUPLAHAN_AR_3 = new ol.format.GeoJSON();
var features_06_TUTUPAN_LAHANPENUTUPLAHAN_AR_3 = format_06_TUTUPAN_LAHANPENUTUPLAHAN_AR_3.readFeatures(json_06_TUTUPAN_LAHANPENUTUPLAHAN_AR_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_06_TUTUPAN_LAHANPENUTUPLAHAN_AR_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_06_TUTUPAN_LAHANPENUTUPLAHAN_AR_3.addFeatures(features_06_TUTUPAN_LAHANPENUTUPLAHAN_AR_3);
var lyr_06_TUTUPAN_LAHANPENUTUPLAHAN_AR_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_06_TUTUPAN_LAHANPENUTUPLAHAN_AR_3, 
                style: style_06_TUTUPAN_LAHANPENUTUPLAHAN_AR_3,
                popuplayertitle: '06_TUTUPAN_LAHAN — PENUTUPLAHAN_AR',
                interactive: true,
                title: '<img src="styles/legend/06_TUTUPAN_LAHANPENUTUPLAHAN_AR_3.png" /> 06_TUTUPAN_LAHAN — PENUTUPLAHAN_AR'
            });
var format_08_INSETBATAS_PROV_AR_4 = new ol.format.GeoJSON();
var features_08_INSETBATAS_PROV_AR_4 = format_08_INSETBATAS_PROV_AR_4.readFeatures(json_08_INSETBATAS_PROV_AR_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_08_INSETBATAS_PROV_AR_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_08_INSETBATAS_PROV_AR_4.addFeatures(features_08_INSETBATAS_PROV_AR_4);
var lyr_08_INSETBATAS_PROV_AR_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_08_INSETBATAS_PROV_AR_4, 
                style: style_08_INSETBATAS_PROV_AR_4,
                popuplayertitle: '08_INSET — BATAS_PROV_AR',
                interactive: true,
                title: '<img src="styles/legend/08_INSETBATAS_PROV_AR_4.png" /> 08_INSET — BATAS_PROV_AR'
            });
var format_01_BATAS_ADMINISTRASIBATASADMINITRASI_AR_5 = new ol.format.GeoJSON();
var features_01_BATAS_ADMINISTRASIBATASADMINITRASI_AR_5 = format_01_BATAS_ADMINISTRASIBATASADMINITRASI_AR_5.readFeatures(json_01_BATAS_ADMINISTRASIBATASADMINITRASI_AR_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_01_BATAS_ADMINISTRASIBATASADMINITRASI_AR_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_01_BATAS_ADMINISTRASIBATASADMINITRASI_AR_5.addFeatures(features_01_BATAS_ADMINISTRASIBATASADMINITRASI_AR_5);
var lyr_01_BATAS_ADMINISTRASIBATASADMINITRASI_AR_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_01_BATAS_ADMINISTRASIBATASADMINITRASI_AR_5, 
                style: style_01_BATAS_ADMINISTRASIBATASADMINITRASI_AR_5,
                popuplayertitle: '01_BATAS_ADMINISTRASI — BATASADMINITRASI_AR',
                interactive: true,
                title: '<img src="styles/legend/01_BATAS_ADMINISTRASIBATASADMINITRASI_AR_5.png" /> 01_BATAS_ADMINISTRASI — BATASADMINITRASI_AR'
            });
var format_02_TRANSPORTASITRANSPORTASI_AR_6 = new ol.format.GeoJSON();
var features_02_TRANSPORTASITRANSPORTASI_AR_6 = format_02_TRANSPORTASITRANSPORTASI_AR_6.readFeatures(json_02_TRANSPORTASITRANSPORTASI_AR_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_02_TRANSPORTASITRANSPORTASI_AR_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_02_TRANSPORTASITRANSPORTASI_AR_6.addFeatures(features_02_TRANSPORTASITRANSPORTASI_AR_6);
var lyr_02_TRANSPORTASITRANSPORTASI_AR_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_02_TRANSPORTASITRANSPORTASI_AR_6, 
                style: style_02_TRANSPORTASITRANSPORTASI_AR_6,
                popuplayertitle: '02_TRANSPORTASI — TRANSPORTASI_AR',
                interactive: true,
                title: '<img src="styles/legend/02_TRANSPORTASITRANSPORTASI_AR_6.png" /> 02_TRANSPORTASI — TRANSPORTASI_AR'
            });
var format_03_PERAIRANPERAIRAN_LN_7 = new ol.format.GeoJSON();
var features_03_PERAIRANPERAIRAN_LN_7 = format_03_PERAIRANPERAIRAN_LN_7.readFeatures(json_03_PERAIRANPERAIRAN_LN_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_03_PERAIRANPERAIRAN_LN_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_03_PERAIRANPERAIRAN_LN_7.addFeatures(features_03_PERAIRANPERAIRAN_LN_7);
var lyr_03_PERAIRANPERAIRAN_LN_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_03_PERAIRANPERAIRAN_LN_7, 
                style: style_03_PERAIRANPERAIRAN_LN_7,
                popuplayertitle: '03_PERAIRAN — PERAIRAN_LN',
                interactive: true,
                title: '<img src="styles/legend/03_PERAIRANPERAIRAN_LN_7.png" /> 03_PERAIRAN — PERAIRAN_LN'
            });
var format_04_GARIS_PANTAIGARISPANTAI_LN_8 = new ol.format.GeoJSON();
var features_04_GARIS_PANTAIGARISPANTAI_LN_8 = format_04_GARIS_PANTAIGARISPANTAI_LN_8.readFeatures(json_04_GARIS_PANTAIGARISPANTAI_LN_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_04_GARIS_PANTAIGARISPANTAI_LN_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_04_GARIS_PANTAIGARISPANTAI_LN_8.addFeatures(features_04_GARIS_PANTAIGARISPANTAI_LN_8);
var lyr_04_GARIS_PANTAIGARISPANTAI_LN_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_04_GARIS_PANTAIGARISPANTAI_LN_8, 
                style: style_04_GARIS_PANTAIGARISPANTAI_LN_8,
                popuplayertitle: '04_GARIS_PANTAI — GARISPANTAI_LN',
                interactive: true,
                title: '<img src="styles/legend/04_GARIS_PANTAIGARISPANTAI_LN_8.png" /> 04_GARIS_PANTAI — GARISPANTAI_LN'
            });
var format_05_KONTURKONTUR_LN_9 = new ol.format.GeoJSON();
var features_05_KONTURKONTUR_LN_9 = format_05_KONTURKONTUR_LN_9.readFeatures(json_05_KONTURKONTUR_LN_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_05_KONTURKONTUR_LN_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_05_KONTURKONTUR_LN_9.addFeatures(features_05_KONTURKONTUR_LN_9);
var lyr_05_KONTURKONTUR_LN_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_05_KONTURKONTUR_LN_9, 
                style: style_05_KONTURKONTUR_LN_9,
                popuplayertitle: '05_KONTUR — KONTUR_LN',
                interactive: true,
                title: '<img src="styles/legend/05_KONTURKONTUR_LN_9.png" /> 05_KONTUR — KONTUR_LN'
            });
var format_08_INSETBATAS_KAB_LN_10 = new ol.format.GeoJSON();
var features_08_INSETBATAS_KAB_LN_10 = format_08_INSETBATAS_KAB_LN_10.readFeatures(json_08_INSETBATAS_KAB_LN_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_08_INSETBATAS_KAB_LN_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_08_INSETBATAS_KAB_LN_10.addFeatures(features_08_INSETBATAS_KAB_LN_10);
var lyr_08_INSETBATAS_KAB_LN_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_08_INSETBATAS_KAB_LN_10, 
                style: style_08_INSETBATAS_KAB_LN_10,
                popuplayertitle: '08_INSET — BATAS_KAB_LN',
                interactive: true,
                title: '<img src="styles/legend/08_INSETBATAS_KAB_LN_10.png" /> 08_INSET — BATAS_KAB_LN'
            });
var format_01_BATAS_ADMINISTRASIBATASADMINITRASI_LN_11 = new ol.format.GeoJSON();
var features_01_BATAS_ADMINISTRASIBATASADMINITRASI_LN_11 = format_01_BATAS_ADMINISTRASIBATASADMINITRASI_LN_11.readFeatures(json_01_BATAS_ADMINISTRASIBATASADMINITRASI_LN_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_01_BATAS_ADMINISTRASIBATASADMINITRASI_LN_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_01_BATAS_ADMINISTRASIBATASADMINITRASI_LN_11.addFeatures(features_01_BATAS_ADMINISTRASIBATASADMINITRASI_LN_11);
var lyr_01_BATAS_ADMINISTRASIBATASADMINITRASI_LN_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_01_BATAS_ADMINISTRASIBATASADMINITRASI_LN_11, 
                style: style_01_BATAS_ADMINISTRASIBATASADMINITRASI_LN_11,
                popuplayertitle: '01_BATAS_ADMINISTRASI — BATASADMINITRASI_LN',
                interactive: true,
                title: '<img src="styles/legend/01_BATAS_ADMINISTRASIBATASADMINITRASI_LN_11.png" /> 01_BATAS_ADMINISTRASI — BATASADMINITRASI_LN'
            });
var format_02_TRANSPORTASITRANSPORTASI_LN_12 = new ol.format.GeoJSON();
var features_02_TRANSPORTASITRANSPORTASI_LN_12 = format_02_TRANSPORTASITRANSPORTASI_LN_12.readFeatures(json_02_TRANSPORTASITRANSPORTASI_LN_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_02_TRANSPORTASITRANSPORTASI_LN_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_02_TRANSPORTASITRANSPORTASI_LN_12.addFeatures(features_02_TRANSPORTASITRANSPORTASI_LN_12);
var lyr_02_TRANSPORTASITRANSPORTASI_LN_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_02_TRANSPORTASITRANSPORTASI_LN_12, 
                style: style_02_TRANSPORTASITRANSPORTASI_LN_12,
                popuplayertitle: '02_TRANSPORTASI — TRANSPORTASI_LN',
                interactive: true,
                title: '<img src="styles/legend/02_TRANSPORTASITRANSPORTASI_LN_12.png" /> 02_TRANSPORTASI — TRANSPORTASI_LN'
            });
var format_07_TOPONIMTOPONIM_PT_13 = new ol.format.GeoJSON();
var features_07_TOPONIMTOPONIM_PT_13 = format_07_TOPONIMTOPONIM_PT_13.readFeatures(json_07_TOPONIMTOPONIM_PT_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_07_TOPONIMTOPONIM_PT_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_07_TOPONIMTOPONIM_PT_13.addFeatures(features_07_TOPONIMTOPONIM_PT_13);
var lyr_07_TOPONIMTOPONIM_PT_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_07_TOPONIMTOPONIM_PT_13, 
                style: style_07_TOPONIMTOPONIM_PT_13,
                popuplayertitle: '07_TOPONIM — TOPONIM_PT',
                interactive: true,
                title: '<img src="styles/legend/07_TOPONIMTOPONIM_PT_13.png" /> 07_TOPONIM — TOPONIM_PT'
            });

lyr_GoogleMaps_0.setVisible(true);lyr_03_PERAIRANPERAIRAN_AR_1.setVisible(true);lyr_03_PERAIRANPERAIRANLAINNYA_AR_2.setVisible(true);lyr_06_TUTUPAN_LAHANPENUTUPLAHAN_AR_3.setVisible(true);lyr_08_INSETBATAS_PROV_AR_4.setVisible(true);lyr_01_BATAS_ADMINISTRASIBATASADMINITRASI_AR_5.setVisible(true);lyr_02_TRANSPORTASITRANSPORTASI_AR_6.setVisible(true);lyr_03_PERAIRANPERAIRAN_LN_7.setVisible(true);lyr_04_GARIS_PANTAIGARISPANTAI_LN_8.setVisible(true);lyr_05_KONTURKONTUR_LN_9.setVisible(true);lyr_08_INSETBATAS_KAB_LN_10.setVisible(true);lyr_01_BATAS_ADMINISTRASIBATASADMINITRASI_LN_11.setVisible(true);lyr_02_TRANSPORTASITRANSPORTASI_LN_12.setVisible(true);lyr_07_TOPONIMTOPONIM_PT_13.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_03_PERAIRANPERAIRAN_AR_1,lyr_03_PERAIRANPERAIRANLAINNYA_AR_2,lyr_06_TUTUPAN_LAHANPENUTUPLAHAN_AR_3,lyr_08_INSETBATAS_PROV_AR_4,lyr_01_BATAS_ADMINISTRASIBATASADMINITRASI_AR_5,lyr_02_TRANSPORTASITRANSPORTASI_AR_6,lyr_03_PERAIRANPERAIRAN_LN_7,lyr_04_GARIS_PANTAIGARISPANTAI_LN_8,lyr_05_KONTURKONTUR_LN_9,lyr_08_INSETBATAS_KAB_LN_10,lyr_01_BATAS_ADMINISTRASIBATASADMINITRASI_LN_11,lyr_02_TRANSPORTASITRANSPORTASI_LN_12,lyr_07_TOPONIMTOPONIM_PT_13];
lyr_03_PERAIRANPERAIRAN_AR_1.set('fieldAliases', {'Id': 'Id', 'Sumber': 'Sumber', 'Jenis': 'Jenis', });
lyr_03_PERAIRANPERAIRANLAINNYA_AR_2.set('fieldAliases', {'Id': 'Id', 'Sumber': 'Sumber', 'Jenis': 'Jenis', });
lyr_06_TUTUPAN_LAHANPENUTUPLAHAN_AR_3.set('fieldAliases', {'PENUTUP_LA': 'PENUTUP_LA', 'SUMBER': 'SUMBER', 'Luas': 'Luas', });
lyr_08_INSETBATAS_PROV_AR_4.set('fieldAliases', {'KABUPATEN': 'KABUPATEN', 'Sumber': 'Sumber', 'luas_ha': 'luas_ha', });
lyr_01_BATAS_ADMINISTRASIBATASADMINITRASI_AR_5.set('fieldAliases', {'FID_BATASA': 'FID_BATASA', 'KAB_KOTA': 'KAB_KOTA', 'KECAMATAN': 'KECAMATAN', 'KELURAHAN': 'KELURAHAN', 'SUMBER': 'SUMBER', 'FID_Erase_': 'FID_Erase_', 'ADMIN': 'ADMIN', 'Luas_Ha': 'Luas_Ha', });
lyr_02_TRANSPORTASITRANSPORTASI_AR_6.set('fieldAliases', {'FUNGSI_JAL': 'FUNGSI_JAL', 'NAMA_JALAN': 'NAMA_JALAN', 'SUMBER': 'SUMBER', });
lyr_03_PERAIRANPERAIRAN_LN_7.set('fieldAliases', {'JENIS_PERA': 'JENIS_PERA', 'NAMA_PERAI': 'NAMA_PERAI', 'SUMBER': 'SUMBER', 'KETOBJ': 'KETOBJ', });
lyr_04_GARIS_PANTAIGARISPANTAI_LN_8.set('fieldAliases', {'JENIS': 'JENIS', 'SUMBER': 'SUMBER', });
lyr_05_KONTURKONTUR_LN_9.set('fieldAliases', {'KONTUR': 'KONTUR', 'INTERVAL': 'INTERVAL', 'SUMBER': 'SUMBER', });
lyr_08_INSETBATAS_KAB_LN_10.set('fieldAliases', {'Id': 'Id', });
lyr_01_BATAS_ADMINISTRASIBATASADMINITRASI_LN_11.set('fieldAliases', {'JENIS': 'JENIS', 'STATUS': 'STATUS', 'SUMBER': 'SUMBER', });
lyr_02_TRANSPORTASITRANSPORTASI_LN_12.set('fieldAliases', {'FUNGSI_JAL': 'FUNGSI_JAL', 'NAMA_JALAN': 'NAMA_JALAN', 'SUMBER': 'SUMBER', });
lyr_07_TOPONIMTOPONIM_PT_13.set('fieldAliases', {'JENIS_UTAM': 'JENIS_UTAM', 'JENIS': 'JENIS', 'KEG_OBJ': 'KEG_OBJ', 'TOPONIM': 'TOPONIM', 'SUMBER': 'SUMBER', 'Toponim_1': 'Toponim_1', });
lyr_03_PERAIRANPERAIRAN_AR_1.set('fieldImages', {'Id': '', 'Sumber': '', 'Jenis': '', });
lyr_03_PERAIRANPERAIRANLAINNYA_AR_2.set('fieldImages', {'Id': '', 'Sumber': '', 'Jenis': '', });
lyr_06_TUTUPAN_LAHANPENUTUPLAHAN_AR_3.set('fieldImages', {'PENUTUP_LA': '', 'SUMBER': '', 'Luas': '', });
lyr_08_INSETBATAS_PROV_AR_4.set('fieldImages', {'KABUPATEN': '', 'Sumber': '', 'luas_ha': '', });
lyr_01_BATAS_ADMINISTRASIBATASADMINITRASI_AR_5.set('fieldImages', {'FID_BATASA': '', 'KAB_KOTA': '', 'KECAMATAN': '', 'KELURAHAN': '', 'SUMBER': '', 'FID_Erase_': '', 'ADMIN': '', 'Luas_Ha': '', });
lyr_02_TRANSPORTASITRANSPORTASI_AR_6.set('fieldImages', {'FUNGSI_JAL': '', 'NAMA_JALAN': '', 'SUMBER': '', });
lyr_03_PERAIRANPERAIRAN_LN_7.set('fieldImages', {'JENIS_PERA': '', 'NAMA_PERAI': '', 'SUMBER': '', 'KETOBJ': '', });
lyr_04_GARIS_PANTAIGARISPANTAI_LN_8.set('fieldImages', {'JENIS': '', 'SUMBER': '', });
lyr_05_KONTURKONTUR_LN_9.set('fieldImages', {'KONTUR': '', 'INTERVAL': '', 'SUMBER': '', });
lyr_08_INSETBATAS_KAB_LN_10.set('fieldImages', {'Id': '', });
lyr_01_BATAS_ADMINISTRASIBATASADMINITRASI_LN_11.set('fieldImages', {'JENIS': '', 'STATUS': '', 'SUMBER': '', });
lyr_02_TRANSPORTASITRANSPORTASI_LN_12.set('fieldImages', {'FUNGSI_JAL': '', 'NAMA_JALAN': '', 'SUMBER': '', });
lyr_07_TOPONIMTOPONIM_PT_13.set('fieldImages', {'JENIS_UTAM': 'TextEdit', 'JENIS': 'TextEdit', 'KEG_OBJ': 'TextEdit', 'TOPONIM': 'TextEdit', 'SUMBER': 'TextEdit', 'Toponim_1': 'TextEdit', });
lyr_03_PERAIRANPERAIRAN_AR_1.set('fieldLabels', {'Id': 'no label', 'Sumber': 'no label', 'Jenis': 'no label', });
lyr_03_PERAIRANPERAIRANLAINNYA_AR_2.set('fieldLabels', {'Id': 'no label', 'Sumber': 'no label', 'Jenis': 'no label', });
lyr_06_TUTUPAN_LAHANPENUTUPLAHAN_AR_3.set('fieldLabels', {'PENUTUP_LA': 'no label', 'SUMBER': 'no label', 'Luas': 'no label', });
lyr_08_INSETBATAS_PROV_AR_4.set('fieldLabels', {'KABUPATEN': 'no label', 'Sumber': 'no label', 'luas_ha': 'no label', });
lyr_01_BATAS_ADMINISTRASIBATASADMINITRASI_AR_5.set('fieldLabels', {'FID_BATASA': 'no label', 'KAB_KOTA': 'no label', 'KECAMATAN': 'no label', 'KELURAHAN': 'no label', 'SUMBER': 'no label', 'FID_Erase_': 'no label', 'ADMIN': 'no label', 'Luas_Ha': 'no label', });
lyr_02_TRANSPORTASITRANSPORTASI_AR_6.set('fieldLabels', {'FUNGSI_JAL': 'no label', 'NAMA_JALAN': 'no label', 'SUMBER': 'no label', });
lyr_03_PERAIRANPERAIRAN_LN_7.set('fieldLabels', {'JENIS_PERA': 'no label', 'NAMA_PERAI': 'no label', 'SUMBER': 'no label', 'KETOBJ': 'no label', });
lyr_04_GARIS_PANTAIGARISPANTAI_LN_8.set('fieldLabels', {'JENIS': 'no label', 'SUMBER': 'no label', });
lyr_05_KONTURKONTUR_LN_9.set('fieldLabels', {'KONTUR': 'no label', 'INTERVAL': 'no label', 'SUMBER': 'no label', });
lyr_08_INSETBATAS_KAB_LN_10.set('fieldLabels', {'Id': 'no label', });
lyr_01_BATAS_ADMINISTRASIBATASADMINITRASI_LN_11.set('fieldLabels', {'JENIS': 'no label', 'STATUS': 'no label', 'SUMBER': 'no label', });
lyr_02_TRANSPORTASITRANSPORTASI_LN_12.set('fieldLabels', {'FUNGSI_JAL': 'no label', 'NAMA_JALAN': 'no label', 'SUMBER': 'no label', });
lyr_07_TOPONIMTOPONIM_PT_13.set('fieldLabels', {'JENIS_UTAM': 'no label', 'JENIS': 'no label', 'KEG_OBJ': 'no label', 'TOPONIM': 'no label', 'SUMBER': 'no label', 'Toponim_1': 'no label', });
lyr_07_TOPONIMTOPONIM_PT_13.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});