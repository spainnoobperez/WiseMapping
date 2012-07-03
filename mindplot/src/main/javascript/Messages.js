/*
 *    Copyright [2011] [wisemapping]
 *
 *   Licensed under WiseMapping Public License, Version 1.0 (the "License").
 *   It is basically the Apache License, Version 2.0 (the "License") plus the
 *   "powered by wisemapping" text requirement on every single page;
 *   you may not use this file except in compliance with the License.
 *   You may obtain a copy of the license at
 *
 *       http://www.wisemapping.org/license
 *
 *   Unless required by applicable law or agreed to in writing, software
 *   distributed under the License is distributed on an "AS IS" BASIS,
 *   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *   See the License for the specific language governing permissions and
 *   limitations under the License.
 */

mindplot.Messages = new Class({
    Static:{
        init:function (locale) {
            locale = $defined(locale) ? locale : 'en';
            mindplot.Messages.__bundle = mindplot.Messages.BUNDLES[locale];
            console.log(mindplot.Messages.__bundle);
        }
    }
});

$msg = function (key) {
    if (!mindplot.Messages.__bundle) {
        mindplot.Messages.init('en');
    }
    return mindplot.Messages.__bundle[key];
};

mindplot.Messages.BUNDLES = {
    'en':{

        ZOOM_IN:'Zoom In',
        ZOOM_OUT:'Zoom Out',
        TOPIC_SHAPE:'Topic Shape',
        TOPIC_ADD:'Add Topic',
        TOPIC_DELETE:'Delete Topic',
        TOPIC_ICON:'Add Icon',
        TOPIC_LINK:'Add Link',
        TOPIC_RELATIONSHIP:'Relationship',
        TOPIC_COLOR:'Topic Color',
        TOPIC_BORDER_COLOR:'Topic Border Color',
        TOPIC_NOTE:'Add Note',
        FONT_FAMILY:'Font Type',
        FONT_SIZE:'Text Size',
        FONT_BOLD:'Text Bold',
        FONT_ITALIC:'Text Italic',
        UNDO_EDITION:'Undo Edition',
        REDO_EDITION:'Redo Edition',
        UNDO:'Undo',
        REDO:'Redo',
        INSERT:'Insert',
        SAVE:'Save',
        NOTE:'Note',
        ADD_TOPIC:'Add Topic',
        LOADING:'Loading ...',
        EXPORT:'Export',
        PRINT:'Print',
        PUBLISH:'Publish',
        COLLABORATE:'Share',
        HISTORY:'History',
        DISCARD_CHANGES:'Discard Changes',
        FONT_COLOR:'Text Color',
        SAVING:'Saving ...',
        SAVE_COMPLETE:'Save Complete',
        ZOOM_IN_ERROR:'Zoom too high.',
        ZOOM_ERROR:'No more zoom can be applied.',
        ONLY_ONE_TOPIC_MUST_BE_SELECTED:'Could not create a topic. Only one topic must be selected.',
        ONE_TOPIC_MUST_BE_SELECTED:'Could not create a topic. One topic must be selected.',
        SAVE_COULD_NOT_BE_COMPLETED:'Save could not be completed. Try latter.',
        UNEXPECTED_ERROR_LOADING:"We're sorry, an unexpected error has occurred. Try again reloading the editor.\nIf the problem persists, contact us to support@wisemapping.com.",
        MAIN_TOPIC:'Main Topic',
        SUB_TOPIC:'Sub Topic',
        ISOLATED_TOPIC:'Isolated Topic',
        CENTRAL_TOPIC: 'Central Topic',
        ONLY_ONE_TOPIC_MUST_BE_SELECTED_COLLAPSE:'Children can not be collapsed. One topic must be selected.'
    },
    'es':{
        DISCARD_CHANGES:'Descartar Cambios',
        SAVE:'Guardar',
        INSERT:'Insertar',
        ZOOM_IN:'Acercar',
        ZOOM_OUT:'Alejar',
        TOPIC_BORDER_COLOR:'Color del Borde',
        TOPIC_SHAPE:'Forma del Tópico',
        TOPIC_ADD:'Agregar Tópico',
        TOPIC_DELETE:'Borrar Tópico',
        TOPIC_ICON:'Agregar Icono',
        TOPIC_LINK:'Agregar Enlace',
        TOPIC_NOTE:'Agregar Nota',
        TOPIC_COLOR:'Color Tópico',
        TOPIC_RELATIONSHIP:'Relación',
        FONT_FAMILY:'Tipo de Fuente',
        FONT_SIZE:'Tamaño de Texto',
        FONT_BOLD:'Negrita',
        FONT_ITALIC:'Italica',
        FONT_COLOR:'Color de Texto',
        UNDO_EDITION:'Undo Edition',
        REDO_EDITION:'Redo Edition',
        UNDO:'Rehacer',
        NOTE:'Nota',
        LOADING:'Cargando ...',
        PRINT:'Imprimir',
        PUBLISH:'Publicar',
        REDO:'Deshacer',
        ADD_TOPIC:'Agregar Tópico',
        COLLABORATE:'Compartir',
        EXPORT:'Exportar',
        HISTORY:'History',
        SAVE_COMPLETE:'Grabado Completo',
        SAVING:'Grabando ...',
        ONE_TOPIC_MUST_BE_SELECTED:'No ha sido posible crear un nuevo tópico. Al menos un tópico debe ser seleccionado.',
        ONLY_ONE_TOPIC_MUST_BE_SELECTED:'No ha sido posible crear un nuevo tópico. Solo un tópico debe ser seleccionado.',
        SAVE_COULD_NOT_BE_COMPLETED:'Grabación no pudo ser completada. Intentelo mas tarde.',
        UNEXPECTED_ERROR_LOADING:"Lo sentimos, un error inesperado ha ocurrido. Intentelo nuevamente recargando el editor.\n Si el problema persiste, contactenos a support@wisemapping.com.",
        ZOOM_ERROR:'No es posible aplicar mas zoom.',
        ZOOM_IN_ERROR:'El zoom es muy alto.',
        MAIN_TOPIC:'Tópico Principal',
        SUB_TOPIC:'Tópico Secundario',
        ISOLATED_TOPIC:'Tópico Aislado',
        CENTRAL_TOPIC: 'Tópico Central',
        ONLY_ONE_TOPIC_MUST_BE_SELECTED_COLLAPSE:'Tópicos hijos no pueden ser colapsados. Solo un topic debe ser seleccionado.'
    }
};

