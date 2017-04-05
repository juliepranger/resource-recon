{% macro src_set(lo_res, hi_res, alt_text, class_name) %}
  <img
    srcset="{{lo_res}} 1x, {{hi_res}} 2x"
    alt="{{alt_text}}"
    {% if class_name %}
    class="{{class_name}}"
    {% endif %}
    />
{% endmacro %}
