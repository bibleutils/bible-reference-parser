export const NON_LATIN_DIGITS_REGEXPS = {
	0: /[\u0660\u06f0\u07c0\u0966\u09e6\u0a66\u0ae6\u0b66\u0be6\u0c66\u0ce6\u0d66\u0e50\u0ed0\u0f20\u1040\u1090\u17e0\u1810\u1946\u19d0\u1a80\u1a90\u1b50\u1bb0\u1c40\u1c50\u{00a620}\u{00a8d0}\u{00a900}\u{00a9d0}\u{00aa50}\u{00abf0}\uff10]/gu,
	1: /[\u0661\u06f1\u07c1\u0967\u09e7\u0a67\u0ae7\u0b67\u0be7\u0c67\u0ce7\u0d67\u0e51\u0ed1\u0f21\u1041\u1091\u17e1\u1811\u1947\u19d1\u1a81\u1a91\u1b51\u1bb1\u1c41\u1c51\u{00a621}\u{00a8d1}\u{00a901}\u{00a9d1}\u{00aa51}\u{00abf1}\uff11]/gu,
	2: /[\u0662\u06f2\u07c2\u0968\u09e8\u0a68\u0ae8\u0b68\u0be8\u0c68\u0ce8\u0d68\u0e52\u0ed2\u0f22\u1042\u1092\u17e2\u1812\u1948\u19d2\u1a82\u1a92\u1b52\u1bb2\u1c42\u1c52\u{00a622}\u{00a8d2}\u{00a902}\u{00a9d2}\u{00aa52}\u{00abf2}\uff12]/gu,
	3: /[\u0663\u06f3\u07c3\u0969\u09e9\u0a69\u0ae9\u0b69\u0be9\u0c69\u0ce9\u0d69\u0e53\u0ed3\u0f23\u1043\u1093\u17e3\u1813\u1949\u19d3\u1a83\u1a93\u1b53\u1bb3\u1c43\u1c53\u{00a623}\u{00a8d3}\u{00a903}\u{00a9d3}\u{00aa53}\u{00abf3}\uff13]/gu,
	4: /[\u0664\u06f4\u07c4\u096a\u09ea\u0a6a\u0aea\u0b6a\u0bea\u0c6a\u0cea\u0d6a\u0e54\u0ed4\u0f24\u1044\u1094\u17e4\u1814\u194a\u19d4\u1a84\u1a94\u1b54\u1bb4\u1c44\u1c54\u{00a624}\u{00a8d4}\u{00a904}\u{00a9d4}\u{00aa54}\u{00abf4}\uff14]/gu,
	5: /[\u0665\u06f5\u07c5\u096b\u09eb\u0a6b\u0aeb\u0b6b\u0beb\u0c6b\u0ceb\u0d6b\u0e55\u0ed5\u0f25\u1045\u1095\u17e5\u1815\u194b\u19d5\u1a85\u1a95\u1b55\u1bb5\u1c45\u1c55\u{00a625}\u{00a8d5}\u{00a905}\u{00a9d5}\u{00aa55}\u{00abf5}\uff15]/gu,
	6: /[\u0666\u06f6\u07c6\u096c\u09ec\u0a6c\u0aec\u0b6c\u0bec\u0c6c\u0cec\u0d6c\u0e56\u0ed6\u0f26\u1046\u1096\u17e6\u1816\u194c\u19d6\u1a86\u1a96\u1b56\u1bb6\u1c46\u1c56\u{00a626}\u{00a8d6}\u{00a906}\u{00a9d6}\u{00aa56}\u{00abf6}\uff16]/gu,
	7: /[\u0667\u06f7\u07c7\u096d\u09ed\u0a6d\u0aed\u0b6d\u0bed\u0c6d\u0ced\u0d6d\u0e57\u0ed7\u0f27\u1047\u1097\u17e7\u1817\u194d\u19d7\u1a87\u1a97\u1b57\u1bb7\u1c47\u1c57\u{00a627}\u{00a8d7}\u{00a907}\u{00a9d7}\u{00aa57}\u{00abf7}\uff17]/gu,
	8: /[\u0668\u06f8\u07c8\u096e\u09ee\u0a6e\u0aee\u0b6e\u0bee\u0c6e\u0cee\u0d6e\u0e58\u0ed8\u0f28\u1048\u1098\u17e8\u1818\u194e\u19d8\u1a88\u1a98\u1b58\u1bb8\u1c48\u1c58\u{00a628}\u{00a8d8}\u{00a908}\u{00a9d8}\u{00aa58}\u{00abf8}\uff18]/gu,
	9: /[\u0669\u06f9\u07c9\u096f\u09ef\u0a6f\u0aef\u0b6f\u0bef\u0c6f\u0cef\u0d6f\u0e59\u0ed9\u0f29\u1049\u1099\u17e9\u1819\u194f\u19d9\u1a89\u1a99\u1b59\u1bb9\u1c49\u1c59\u{00a629}\u{00a8d9}\u{00a909}\u{00a9d9}\u{00aa59}\u{00abf9}\uff19]/gu,
}
export const ALL_NON_LATIN_DIGITS_REGEXP = /[\u0660-\u0669\u06f0-\u06f9\u07c0-\u07c9\u0966-\u096f\u09e6-\u09ef\u0a66-\u0a6f\u0ae6-\u0aef\u0b66-\u0b6f\u0be6-\u0bef\u0c66-\u0c6f\u0ce6-\u0cef\u0d66-\u0d6f\u0e50-\u0e59\u0ed0-\u0ed9\u0f20-\u0f29\u1040-\u1049\u1090-\u1099\u17e0-\u17e9\u1810-\u1819\u1946-\u194f\u19d0-\u19d9\u1a80-\u1a89\u1a90-\u1a99\u1b50-\u1b59\u1bb0-\u1bb9\u1c40-\u1c49\u1c50-\u1c59\uA620-\uA629\uA8d0-\uA8d9\uA900-\uA909\uA9d0-\uA9d9\uAA50-\uAA59\uABF0-\uABF9\uff10-\uff19]/;

export const SPACE_REGEXP = '[\\s\u00a0]';
export const REGEXP_CHARACTERS = /[.*+?^${}()|[\]\\]/g;
