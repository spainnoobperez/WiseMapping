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

package com.wisemapping.importer.freemind;

import com.wisemapping.model.MindmapIcon;
import com.wisemapping.model.MindmapIcons;
import com.wisemapping.model.IconFamily;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import java.util.Map;
import java.util.HashMap;
import java.util.List;
import java.util.Set;

final public class FreemindIconConverter {


    private final static Map<String, MindmapIcon> freeIdToIcon = new HashMap<String, MindmapIcon>();
    private final static Map<MindmapIcon, String> iconToFreeId = new HashMap<MindmapIcon, String>();

    private FreemindIconConverter() {
    }

    @Nullable
    public static String toWiseId(@NotNull String iconId) {
        final MindmapIcon result = freeIdToIcon.get(iconId);
        return result != null ? result.getId() : null;
    }

    @Nullable
    public static String toFreemindId(@NotNull String iconId) {
        return iconToFreeId.get(MindmapIcons.findById(iconId));
    }


    static {

        // Map numbers icons family ...
        final List<MindmapIcon> bulletsImages = MindmapIcons.getIconByFamily(IconFamily.BULLET);

        for (int i = 0; i < bulletsImages.size(); i++) {
            final MindmapIcon icon = bulletsImages.get(i);
            iconToFreeId.put(icon, "full-" + i);
        }

        // Generic mapping ...
        iconToFreeId.put(MindmapIcons.BULB_LIGHT_ON, "idea");
        iconToFreeId.put(MindmapIcons.TICK_TICK, "button_ok");
        iconToFreeId.put(MindmapIcons.TICK_CROSS, "button_cancel");

        // Map arrow icons ...
        iconToFreeId.put(MindmapIcons.ARROW_UP, "up");
        iconToFreeId.put(MindmapIcons.ARROW_DOWN, "down");
        iconToFreeId.put(MindmapIcons.ARROW_RIGHT, "back");
        iconToFreeId.put(MindmapIcons.ARROW_LEFT, "forward");

        // Map smile icons ...
        iconToFreeId.put(MindmapIcons.FACE_PLAIN, "smiley-neutral");
        iconToFreeId.put(MindmapIcons.FACE_SMILE, "ksmiletris");
        iconToFreeId.put(MindmapIcons.FACE_SURPRISE, "smiley-oh");
        iconToFreeId.put(MindmapIcons.FACE_SAD, "smiley_bad");


        // Maps Flag familly Icons ...
        final List<MindmapIcon> flagImages = MindmapIcons.getIconByFamily(IconFamily.FLAG);
        for (MindmapIcon flagImage : flagImages) {
            iconToFreeId.put(flagImage, "flag-" + flagImage.getName());
        }


        final Set<MindmapIcon> mindmapIcons = iconToFreeId.keySet();
        for (MindmapIcon mindmapIcon : mindmapIcons) {
            freeIdToIcon.put(iconToFreeId.get(mindmapIcon), mindmapIcon);
        }


    }
}