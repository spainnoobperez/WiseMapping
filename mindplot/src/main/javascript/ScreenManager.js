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

mindplot.ScreenManager = new Class({
    initialize:function(width, height, divElement) {
        $assert(divElement, "can not be null");
        this._divContainer = divElement;
        this._offset = {x:0,y:0};

        // Ignore default click event propagation. Prevent 'click' event on drad.
        this._clickEvents = [];
        this._divContainer.addEvent('click',function(event){event.stopPropagation()});
    },

    setScale : function(scale) {
        $assert(scale, 'Screen scale can not be null');
        this._workspaceScale = scale;
    },

    addEvent : function(event, listener) {
        if (event == 'click')
            this._clickEvents.push(listener);
        else
            $(this._divContainer).addEvent(event, listener);
    },

    removeEvent : function(event, listener) {
        if (event == 'click')
            this._clickEvents.remove(listener);
        else
            $(this._divContainer).removeEvent(event, listener);
    },

    fireEvent : function(type, event) {
        if (type == 'click') {
            this._clickEvents.forEach(function(listener)
            {
               listener(type,event);
            });
        }
        else {
            $(this._divContainer).fireEvent(type, event);
        }
    },

    getWorkspaceElementPosition : function(e) {
        // Retrive current element position.
        var elementPosition = e.getPosition();
        var x = elementPosition.x;
        var y = elementPosition.y;

        // Add workspace offset.
        x = x - this._offset.x;
        y = y - this._offset.y;

        // Scale coordinate in order to be relative to the workspace. That's coordSize/size;
        x = x / this._workspaceScale;
        y = y / this._workspaceScale;

        // Subtract div position.
        /*    var containerElem = this.getContainer();
         var containerPosition = core.Utils.workOutDivElementPosition(containerElem);
         x = x + containerPosition.x;
         y = y + containerPosition.y;*/

        // Remove decimal part..
        return {x:x,y:y};
    },

    getWorkspaceIconPosition : function(e) {
        // Retrieve current icon position.
        var image = e.getImage();
        var elementPosition = image.getPosition();
        var imageSize = e.getSize();

        //Add group offset
        var iconGroup = e.getGroup();
        var group = iconGroup.getNativeElement();
        var coordOrigin = group.getCoordOrigin();
        var groupSize = group.getSize();
        var coordSize = group.getCoordSize();

        var scale = {x:coordSize.width / parseInt(groupSize.width), y:coordSize.height / parseInt(groupSize.height)};

        var x = (elementPosition.x - coordOrigin.x - (parseInt(imageSize.width) / 2)) / scale.x;
        var y = (elementPosition.y - coordOrigin.y - (parseInt(imageSize.height) / 2)) / scale.y;

        //Retrieve iconGroup Position
        var groupPosition = iconGroup.getPosition();
        x = x + groupPosition.x;
        y = y + groupPosition.y;

        //Retrieve topic Position
        var topic = iconGroup.getTopic();
        var topicPosition = this.getWorkspaceElementPosition(topic);
        topicPosition.x = topicPosition.x - (parseInt(topic.getSize().width) / 2);


        // Remove decimal part..
        return {x:x + topicPosition.x,y:y + topicPosition.y};
    },

    getWorkspaceMousePosition : function(e) {
        // Retrieve current mouse position.
        var mousePosition = this._getMousePosition(e);
        var x = mousePosition.x;
        var y = mousePosition.y;

        // Subtract div position.
        var containerElem = this.getContainer();
        var containerPosition = core.Utils.workOutDivElementPosition(containerElem);
        x = x - containerPosition.x;
        y = y - containerPosition.y;

        // Scale coordinate in order to be relative to the workspace. That's coordSize/size;
        x = x * this._workspaceScale;
        y = y * this._workspaceScale;

        // Add workspace offset.
        x = x + this._offset.x;
        y = y + this._offset.y;

        // Remove decimal part..
        return new core.Point(x, y);
    },

    /**
     * http://www.howtocreate.co.uk/tutorials/javascript/eventinfo
     */
    _getMousePosition : function(event) {
        return core.Utils.getMousePosition(event);
    },

    getContainer : function() {
        return this._divContainer;
    },

    setOffset : function(x, y) {
        this._offset.x = x;
        this._offset.y = y;
    }});
